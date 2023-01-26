export type ArticleType = {
  id: string;
  attributes: {
    titre: string;
    contenu: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
};
