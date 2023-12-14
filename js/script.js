const { createApp } = Vue;

createApp({
    data() {
        return {
            vinyls: [],
            apiUrl: "server.php",
        };
    },

    created() {
      axios.get(this.apiUrl).then((resp) => {
        this.vinyls = resp.data;
        console.log(resp);
      })
    },
    methods: {

    },
}).mount("#app");