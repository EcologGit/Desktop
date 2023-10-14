<template>
    <div>
      <!-- Top100 (Kraken) Counter -->
      <div ref="top100Counter"></div>
      <!-- END Top100 (Kraken) Counter -->
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//st.top100.ru/top100/top100.js';
  
      const noscriptImg = document.createElement('img');
      noscriptImg.src = '//counter.rambler.ru/top100.cnt?pid=7726853';
      noscriptImg.alt = 'Топ-100';
  
      this.$nextTick(() => {
        const container = this.$refs.top100Counter;
        container.appendChild(noscriptImg);
        container.appendChild(script);
      });
    }
  };
  </script>