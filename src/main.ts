import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WordSearch from "./word_search/WordSearch.js";

const app = createApp(App);

app.mount('#app')

const a = new WordSearch(15, "ahs kjfdadf ads fhajkdfhajd jajhfhajdfhajdfd ds fjsa das".split(" "));
a.render().then((m) => console.log(m));