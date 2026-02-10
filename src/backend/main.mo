import Text "mo:core/Text";
import List "mo:core/List";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

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

  var inquiries = List.empty<ContactInquiry>();

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Contact form functionality
  public shared func submitInquiry(name : Text, emailOrPhone : Text, subject : Text, message : Text) : async () {
    // No authorization check - contact forms should be publicly accessible to everyone including guests
    let inquiry : ContactInquiry = {
      name;
      emailOrPhone;
      subject;
      message;
      timestamp = 0; // In a production environment, use Time.now() here.
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    inquiries.toArray();
  };

  public query ({ caller }) func getContactDetails() : async {
    website : Text;
    email : Text;
    phone : Text;
  } {
    {
      website = "www.business-website.com";
      email = "eurobanga@gmail.com";
      phone = "79736-73529";
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
