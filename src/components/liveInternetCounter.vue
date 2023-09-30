<template>
  <div>
    <!--LiveInternet counter-->
    <a href="https://www.liveinternet.ru/click" target="_blank">
      <img ref="licnt902F" width="88" height="31" style="border:0" 
        title="LiveInternet: показано число просмотров и посетителей за 24 часа"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
        alt=""/>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    // LiveInternet counter script
    const d = document;
    const s = screen;
    this.$refs.licnt902F.src =
      "https://counter.yadro.ru/hit?t52.15;r" +
      escape(d.referrer) +
      ((typeof s === "undefined") ? "" : ";s" + s.width + "*" + s.height + "*" +
      (s.colorDepth ? s.colorDepth : s.pixelDepth)) +
      ";u" + escape(d.URL) +
      ";h" + escape(d.title.substring(0, 150)) + ";" + Math.random();
  }
};
</script>