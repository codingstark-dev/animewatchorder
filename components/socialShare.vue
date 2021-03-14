<template>
  <div>
    <twitter-button
      :url="shareLink"
      :description="description"
    />
    <pinterest-button
      :url="shareLink"
      :description="description"
    />
    <Reddit-button
      :url="shareLink"
      :description="description"
    />
    <Facebook-button
      :url="shareLink"
      :description="description"
    />
    <Tumblr-button
      :url="shareLink"
      :description="description"
    />
    <WhatsApp-button
      :url="shareLink"
      :description="description"
    />
    <Telegram-button
      :url="shareLink"
      :description="description"
    />
    <LinkedIn-button
      :url="shareLink"
      :description="description"
    />
  </div>
</template>

<script>
import VueShareButtons from "vue-share-buttons/dist/vue-share-buttons.umd";
import "vue-share-buttons/dist/vue-share-buttons.css";

export default {
  components: {
    ...VueShareButtons.components,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    shareLink: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      //   shareDescription: props.description,
      //   shareUrl: props.shareLink,
    };
  },
};
</script>