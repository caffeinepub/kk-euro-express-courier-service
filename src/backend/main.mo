import Text "mo:core/Text";
import List "mo:core/List";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  public type ContactInquiry = {
    name : Text;
    emailOrPhone : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactInquiry {
    public func compareByTimestamp(a : ContactInquiry, b : ContactInquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  // Migration: preserve accessControlState stable variable from previous version to allow upgrade.
  // This variable is no longer used but must remain declared to prevent implicit discard error.
  type UserRole = { #admin; #guest; #user };
  stable var accessControlState : {
    var adminAssigned : Bool;
    userRoles : Map.Map<Principal, UserRole>;
  } = {
    var adminAssigned = false;
    userRoles = Map.empty<Principal, UserRole>();
  };

  stable let inquiries = List.empty<ContactInquiry>();

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public type ContactDetails = {
    website : Text;
    email : Text;
    phone : Text;
    address : Text;
  };

  // Contact form functionality
  public shared func submitInquiry(name : Text, emailOrPhone : Text, subject : Text, message : Text) : async () {
    let inquiry : ContactInquiry = {
      name;
      emailOrPhone;
      subject;
      message;
      timestamp = 0;
    };
    inquiries.add(inquiry);
  };

  // Allow any logged-in user to view inquiries (no admin token required)
  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    if (caller.isAnonymous()) {
      Runtime.trap("unauthorized");
    };
    inquiries.toArray();
  };

  public query func getContactDetails() : async ContactDetails {
    {
      website = "www.business-website.com";
      email = "eurobanga@gmail.com";
      phone = "79736-73529";
      address = "Near Canara Bank, Main Rd, SBS Nagar, 144505";
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Login required");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Login required");
    };
    userProfiles.add(caller, profile);
  };
};
