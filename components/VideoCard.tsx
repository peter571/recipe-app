import { StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { UrlProp } from "../types/types";

export default function VideoCard({ url }: UrlProp) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <Video
      ref={video}
      style={styles.video}
      resizeMode={ResizeMode.CONTAIN}
      source={{
        uri: url,
      }}
      useNativeControls
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
