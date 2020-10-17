<template>
<a :class="{clicked: clicked}"@click="copyToClipboard()">{{text}}</a>
</template>

<script>
  export default {
  props: {
link: String
},
  data() {
    return {
      text: "Copy",
      clicked: false
    };
  },
  methods: {
    copyToClipboard() {
      var self = this;
      navigator.clipboard.writeText(self.link).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          self.text = "Copied!";
          self.clicked = !self.clicked;
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    }
  }
}
</script>

<style scoped>
  a {
  color: #f5f5f5;
  padding: 10px 30px;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
  font-family:Poppins, sans-serif;
  font-size: 18px;
  font-weight: 700;
    background: hsl(180, 66%, 49%);
}

.clicked{
  background: hsl(257, 27%, 26%);
}
</style>
