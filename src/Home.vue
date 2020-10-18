<template>
  <div>
    <Navbar></Navbar>
    <section id="intro">
      <div id="text">
        <div>
          <h1>More than just shorter links</h1>
          <p>Build your brand's reputation on how your links are performing.</p>
          <a id="getStartedBtn" class="btn">Get Started</a>
        </div>
      </div>
      <div id="workingIllu"></div>
    </section>
    <section id="advStat">
      <div id="lkShrtnr">
        <LinkShortener></LinkShortener>
        <div class="textWrap">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div id="cardChain">
          <CardChain></CardChain>
        </div>
      </div>
    </section>
    <section id="boost">
      <h2>Boost your links today</h2>
      <a class="btn">Get Started</a>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import LinkShortener from "./components/LinkShortener";
import CardChain from "./components/CardChain";

export default {
  components: {
    Navbar,
    Foot,
    LinkShortener,
    CardChain,
  },
};
</script>

<style scoped>
h1 {
  font-size: 45px;
  color: hsl(255, 11%, 22%);
  line-height: 52px;
  font-weight: 700;
}
p {
  color: hsl(257, 7%, 63%);
}
#intro p {
  font-size: 22px;
  line-height: 36px;
}
#intro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-areas: "col-1 col-2";
  grid-gap: 1rem;
  padding: 2rem 2rem;
}
#text {
  display: flex;
  grid-area: col-1;
  align-items: center;
  margin-bottom: 90px;
}
.btn {
  display: inline-block;
  background: hsl(180, 66%, 49%);
  color: #f5f5f5;
  padding: 9px 18px;
  border-radius: 26px;
  font-weight: 700;
}
#intro .btn {
  margin-top: 29px;
}
#workingIllu img {
  width: calc(100% + 2rem);
}
#workingIllu {
  grid-area: col-2;
  width: 100%;
}
#advStat {
  background: #dadada;
  padding: 0 2rem 2rem 2rem;
}
#advStat h2,
#advStat p {
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: 24px;
  color: hsl(255, 11%, 22%);
}
#advStat p {
  display: block;
  margin-bottom: 30px;
}
#boost {
  background: url("https://raw.githubusercontent.com/BerylBucket/RelLink/main/assets/boost-dk.svg"),
    hsl(257, 27%, 26%);
  padding: 3rem;
  text-align: center;
}
#boost h2 {
  color: #f5f5f5;
}
#boost .btn {
  margin-top: 10px;
}
@media (max-width: 800px) {
  #intro {
    grid-template-areas: "col-2" "col-1";
  }
  #text {
    margin-top: 20px;
    position: relative;
    margin-bottom: 150px;
    text-align: center;
  }
  #getStartedBtn {
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50%));
  }
}
@media (min-width: 1024px) {
  #intro {
    padding: 3rem 5.6rem;
  }
  #advStat {
    padding: 0 5.6rem 3rem 5.6rem;
  }
  #advStat .textWrap {
    width: 70%;
    display: block;
    margin: 30px auto 0 auto;
  }
  #workingIllu img {
    width: calc(100% + 5.6rem);
  }
}
@media (min-width: 1200px) {
  #text {
    display: flex;
    align-items: center;
    width: 40vw;
  }
  #workingIllu {
    width: 40vw;
  }
  #workingIllu img {
    width: calc(100% + 8rem);
  }
  h1 {
    font-size: 64px;
    line-height: 75px;
  }
  h2 {
    font-size: 32px;
  }
  #advStat p {
    font-size: 22px;
  }
  #intro {
    padding: 5rem 8rem;
  }
  #intro p {
    font-size: 32px;
    line-height: 43px;
  }
  #getStartedBtn {
    font-size: 24px;
    padding: 12px 26px;
    border-radius: 36px;
  }
  #advStat {
    padding: 0 8rem 4rem 8rem;
  }
}
</style>
