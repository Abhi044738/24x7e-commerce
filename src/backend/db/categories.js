import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },

  {
    _id: uuid(),
    categoryName: "Romance",
    description:
      " Romance is a genre focused on love and emotional relationships between characters. It typically portrays the development of a romantic relationship and explores themes of passion, desire, and connection. Romance stories often revolve around the emotional journey of the main characters as they navigate obstacles and challenges to find true love and happiness.",
  },

  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Fantasy is a genre that involves imaginative and often magical elements set in fictional worlds. It encompasses stories of mythical creatures, supernatural powers, epic quests, and enchanted realms. Fantasy literature allows readers to escape into worlds filled with wonder, adventure, and limitless possibilities, where the ordinary rules of reality are suspended.",
  },

  {
    _id: uuid(),
    categoryName: "Adventure",
    description:
      "Adventure is a genre that focuses on exciting and thrilling journeys, quests, or expeditions. It often involves protagonists who embark on perilous or daring adventures, exploring unknown territories, overcoming obstacles, and facing dangerous situations. Adventure stories captivate readers with their sense of exploration, risk-taking, and the thrill of experiencing thrilling escapades through the eyes of the characters.",
  },
  {
    _id: uuid(),
    categoryName: "Philosophy",
    description:
      "Philosophy books belong to a genre that delves into the profound questions of human existence, the nature of reality, ethics, knowledge, and the principles that govern our understanding of the world. These books engage readers in intellectual exploration, encouraging deep contemplation and critical thinking about life's fundamental aspects. They offer insights into various philosophical perspectives and stimulate curiosity about the complexities of human thought, morality, and the search for meaning. Philosophy books provide readers with a thought-provoking journey that broadens their understanding of the human experience and the universe we inhabit.",
  },
];
