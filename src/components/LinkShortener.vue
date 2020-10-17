<template>
  <div class="lkShtnr" :style="style">
    <div class="linkInputBox" ref="linkInputBox">
      <input v-model="link" placeholder="Shorten a link here…" />
      <a @click="shortenLink">Shorten It!</a>
    </div>
    <template v-for="x in short">
      <div class="linkCard">
        <div class="oriLink">
          {{ x.ori }}
        </div>
        <div class="linkCardEnd">
          <CopyBtn :link="x.link"></CopyBtn>
          <span class="sLink">{{ x.link }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import CopyBtn from "./CopyBtn";

export default {
  components: {
    CopyBtn,
  },
  data() {
    return {
      short: [],
      link: "",
      linkInputBoxHeight: 0,
    };
  },
  watch: {
    short(val) {
      window.localStorage.setItem("links", JSON.stringify(this.short));
    },
  },
  methods: {
    remDup(arr) {
      return arr.filter((v, i, a) => a.findIndex((t) => t.ori === v.ori) === i);
    },
    addHttps(link) {
      var httpsLink = link;
      if (!link.includes("https://")) {
        httpsLink = "https://" + link;
      }
      return httpsLink;
    },
    shortenLink() {
      var tkn = "e26abcf25fc774a193088e518f0ccdc5f0e9379d";
      fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + tkn,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: this.addHttps(this.link),
          domain: "bit.ly",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.short.push({ ori: data.long_url, link: data.link });
          this.short = this.remDup(this.short);
        });
    },
    getLinkInputBoxHeight() {
      this.linkInputBoxHeight = this.$refs.linkInputBox.clientHeight;
    },
  },
  mounted() {
    window.addEventListener("load", () => {
      this.getLinkInputBoxHeight();
    });
    var ls = JSON.parse(window.localStorage.getItem("links"));
    if (typeof ls === "undefined" || ls === null || ls === "") {
      window.localStorage.setItem("links", "[]");
    } else {
      this.short = ls;
    }
  },
  computed: {
    style() {
      return "transform: translateY(-" + this.linkInputBoxHeight / 2 + "px)";
    },
  },
};
</script>

<style scoped>
.lkShtnr {
  width: 100%;
}
.linkInputBox {
  background: url("https://raw.githubusercontent.com/BerylBucket/RelLink/main/assets/shortenBg-dk.svg"),
    hsl(257, 27%, 26%);
  background-size: 100% 100%;
  padding: 20px;
  border-radius: 10px;
}
.linkInputBox input {
  width: calc(100% - 160px);
  padding: 10px;
  border-radius: 6px;
  display: inline-block;
}
.linkInputBox input::placeholder {
  color: hsl(257, 7%, 63%);
}
.linkInputBox a {
  color: #f5f5f5;
  background: hsl(180, 66%, 49%);
  border-radius: 6px;
  margin-left: 15px;
  padding: 10px 22px;
}
.linkCard {
  background: #f5f5f5;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  border-radius: 10px;
  margin-top: 20px;
}
.linkCard .oriLink {
  display: flex;
  align-items: center;
}
.linkCard .sLink {
  display: inline-block;
  color: hsl(180, 66%, 49%);
  margin-left: 8px;
}
.linkCard .copyBtn {
  background: hsl(180, 66%, 49%);
  color: #f5f5f5;
  padding: 5px 9px;
  border-radius: 6px;
  text-align: center;
  display: inline-block;
}
.linkCardEnd {
  transform: rotate(180deg);
}
.linkCardEnd * {
  transform: rotate(180deg);
}
@media screen and (max-width: 600px) {
  .linkInputBox {
    background-image: url("https://raw.githubusercontent.com/BerylBucket/RelLink/main/assets/shortenBg-mb.svg");
  }
  .linkInputBox input {
    width: 100%;
  }
  .linkInputBox a {
    margin: 0;
    padding: 7px;
    display: block;
    margin-top: 12px;
    text-align: center;
  }
  .linkCardEnd {
    border-bottom: hsl(0, 0%, 75%) solid 1px;
    margin-top: 15px;
  }
  .linkCard .sLink {
    margin: 15px 0;
    float: right;
  }
  .linkCard .copyBtn {
    display: block;
  }
}
</style>
