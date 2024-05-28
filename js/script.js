const { createApp } = Vue

  createApp({
    data() {       
      return {
        message : 'Hello vue!',
        imageUrl : 'https://st.ilfattoquotidiano.it/wp-content/uploads/2018/12/11/roger905.jpg'
      }
    }
  }).mount('#app')