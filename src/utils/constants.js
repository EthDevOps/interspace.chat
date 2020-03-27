const domain = "portal.interspace.chat";

export const JitsiInstances = ["capsule1", "capsule2"];

export const RoomURLs = {
  capsule1: {
    jitsi: {
      domain,
      roomName: "capsule1"
    }
  },
  capsule2: {
    jitsi: {
      domain,
      roomName: "capsule2"
    }
  },
  "new room": {
    jitsi: {
      domain,
      roomName: "new room"
    }
  }
};

export const RoomNames = Object.keys(RoomURLs);
