import axios from "axios";

const WordPressService = {
  getData: () => {
    axios
      .get("https://www.thermiefrance.com/wp-json/wp/v2/posts")
      .then(data => {
        return data.data;
      });
  }
};

export default WordPressService;
