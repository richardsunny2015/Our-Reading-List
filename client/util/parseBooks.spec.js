const {expect} = require('chai'),
  parseBooks = require('./parseBooks')

describe('parseBooks', () => {
  let example1, example2
  beforeEach(() => {
    example1 = [
      {
        id: '1EhPf1ZptXwC',
        volumeInfo: {
          title: 'Norwegian Wood',
          authors: ['Haruki Murakami'],
          publishedDate: '2010-08-11',
          description:
            'Stunning and elegiac, Norwegian Wood first propelled Haruki Murakami into the forefront of the literary scene. Toru, a serious young college student in Tokyo, is devoted to Naoko, a beautiful and introspective young woman, but their mutual passion is marked by the tragic death of their best friend years before. As Naoko retreats further into her own world, Toru finds himself drawn to a fiercely independent and sexually liberated young woman. A magnificent coming-of-age story steeped in nostalgia, Norwegian Wood blends the music, the mood, and the ethos that were the sixties with a young man’s hopeless and heroic first love.',
          pageCount: 304,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=1EhPf1ZptXwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=1EhPf1ZptXwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'nZplCgAAQBAJ',
        volumeInfo: {
          title: 'Norwegian Wood',
          authors: ['Lars Mytting'],
          publishedDate: '2015-10-06',
          description:
            "The latest Scandinavian publishing phenomenon is not a Stieg Larsson like thriller; it's a book about chopping, stacking, and burning wood that has sold more than 200,000 copies in Norway and Sweden and has been a fixture on the bestseller lists there for more than a year. Norwegian Wood provides useful advice on the rustic hows and whys of taking care of your heating needs, but it's also a thoughtful attempt to understand man's age-old predilection for stacking wood and passion for open fires. An intriguing window into the exoticism of Scandinavian culture, the book also features enough inherently interesting facts and anecdotes and inspired prose to make it universally appealing. The U.S. edition is a fully updated version of the Norwegian original, and includes an appendix of U.S.-based resources and contacts.",
          pageCount: 192,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=nZplCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=nZplCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: '577YAAAAMAAJ',
        volumeInfo: {
          title: 'Norwegian Wood',
          authors: ['Jerri Holan'],
          publishedDate: '1990',
          description:
            'Surveys the Norwegian tradition of building wooden houses and churches, describes surviving examples, and discusses log and stave details',
          pageCount: 208,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=577YAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=577YAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'PvNPAAAAMAAJ',
        volumeInfo: {
          title: 'Norwegian Wood',
          authors: ['Elisabeth Tostrup'],
          publishedDate: '2006-08-31',
          description:
            "Whether set along the picturesque coast of Norway or in its remote mountains and forests, architect Wenche Selmer's wooden cabins and houses blend effortlessly into their surroundings. Combining local building traditions with modern conveniences, her designs evoke Norway in all its rugged beauty and smart Scandinavian pragmatism. Just looking at these cabins is an invitation to sit down at the lovingly designed dining table for a hearty meal, or to curl up with a book on one of the inviting corner sofas while enjoying the panoramic view through large glass windows. These are houses that, while thoughtfully designed and beautifully crafted, were meant first and foremost to be lived in, and it is this accommodation of high design and livability that is partly responsible for their universal appeal. Norwegian Wood is the first book on the life and architecture of Wenche Selmer (19201998)one of the few women who gained prominence among European architects in the mid-twentieth century. Fourteen of her beautiful wooden cabins and houses are featured in detailed descriptions, plans, and a wealth of archival images and newly commissioned color photography. Whether you're planning to build your own vacation home, have always loved Scandinavian design or simply enjoy the warmth and sensuality of wooden architecture, you'll find plenty of inspiration here.",
          pageCount: 208,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=PvNPAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=PvNPAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'vQkCkAEACAAJ',
        volumeInfo: {
          title: 'Norwegian Wood Activity Book',
          authors: ['Lars Mytting'],
          publishedDate: '2019-10-29',
          description:
            "Following the extraordinary international success of NORWEGIAN WOOD, the bestselling manual for chopping, stacking and drying wood the Scandinavian way, THE NORWEGIAN WOOD ACTIVITY BOOK offers something for all the family, including: · Top Trunks · Spot the difference · Dot-to-dot and mazes · Cut out and colour the woodchoppers' clothing · Step-by-step guides to laying the perfect fire and building a round stack · And magnificent frozen landscapes THE NORWEGIAN WOOD ACTIVITY BOOK is an original gift for all seasons and the perfect fireside companion, to bring warmth and entertainment to armchair enthusiasts and active woodcutters alike.",
          pageCount: 64,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=vQkCkAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=vQkCkAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'MJKCoAEACAAJ',
        volumeInfo: {
          title: 'Norwegian wood',
          authors: ['Uggi Jónsson', 'Haruki Murakami'],
          publishedDate: '1991',
          language: 'en'
        }
      },
      {
        id: 'Kiq7_z-Xg9YC',
        volumeInfo: {
          title: 'Love',
          authors: ['Valerie Martin'],
          publishedDate: '1999',
          description:
            "Ms. Martin's trademarks: a preoccupation with the dark underside of life, a taste for disturbing, even macabre imagery… excursions into an unseen realm [of] strange and magical events… Martin possesses a sure storytelling gift, [an] ability to transform a myriad of specific details into larger, symbolic shapes. --New York Times About the Author(s) Valerie Martin, an American novelist and short story writer, was born in Sedalia, Missouri in 1948, but spent most of her childhood and young adult life in New Orleans. She attended the University of New Orleans and the University of Massachusetts at Amherst where she received an MFA in Creative Writing. Ms. Martin has taught at the University of New Orleans, New Mexico State University in Las Cruces, the University of Alabama at Tuscaloosa, the University of Massachusetts at Amherst, and Mt. Holyoke College.",
          pageCount: 79,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=Kiq7_z-Xg9YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=Kiq7_z-Xg9YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'kB65Rva1XM0C',
        volumeInfo: {
          title: 'Vintage Murakami',
          authors: ['Haruki Murakami'],
          publishedDate: '2007-12-18',
          description:
            'Vintage Readers are a perfect introduction to some of the greatest modern writers presented in attractive, accessible paperback editions. “Murakami’s bold willingness to go straight over the top is a signal indication of his genius. . . . A world-class writer who has both eyes open and takes big risks.” —The Washington Post Book World Not since Yukio Mishima and Yasunari Kawabata has a Japanese writer won the international acclaim enjoyed by Haruki Murakami. His genre-busting novels, short stories and reportage, which have been translated into 35 languages, meld the surreal and the hard-boiled, deadpan comedy and delicate introspection. Vintage Murakami includes the opening chapter of the international bestseller Norwegian Wood; “Lieutenant Mamiya’s Long Story: Parts I and II” from his monumental novel The Wind-Up Bird Chronicle; “Shizuko Akashi” from Underground, his non-fiction book on the Toyko subway attack of 1995; and the short stories “Barn Burning,” “Honeypie.” Also included, for the first time in book form, the short story, “Ice Man.”',
          pageCount: 192,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=kB65Rva1XM0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=kB65Rva1XM0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: '0ZJtzpXJyOkC',
        volumeInfo: {
          title: 'Underground',
          authors: ['Haruki Murakami'],
          publishedDate: '2010-08-11',
          description:
            'In this haunting work of journalistic investigation, Haruki Murakami tells the story of the horrific terrorist attack on Japanese soil that shook the entire world. On a clear spring day in 1995, five members of a religious cult unleashed poison gas on the Tokyo subway system. In attempt to discover why, Haruki Murakmi talks to the people who lived through the catastrophe, and in so doing lays bare the Japanese psyche. As he discerns the fundamental issues that led to the attack, Murakami paints a clear vision of an event that could occur anytime, anywhere.',
          pageCount: 384,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=0ZJtzpXJyOkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=0ZJtzpXJyOkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'gmN-BwAAQBAJ',
        volumeInfo: {
          title: 'Quicklet on Norwegian Wood by Haruki Murakami',
          authors: ['Karla Kane'],
          publishedDate: '2011-12-14',
          description:
            "Quicklets: Learn More. Read Less. Haruki Murakami is a Japanese post-modern writer and translator who's won numerous international accolades including the Franz Kafka Prize and the Jerusalem Prize. His novels include Dance, Dance, Dance, South of the Border, West of the Sun, The Wind-up Bird Chronicle, Kafka On the Shore and Hard-boiled Wonderland and the End of the World, among others. His work often features mind-bending or surreal elements (though Norwegian Wood does not).He studied drama at Waseda University in Tokyo and received honorary doctorates from the University of Liege and Princeton University. Norwegian Wood, titled after the Beatles' song of the same name, is an originally Japanese-language novel dealing with young love, sexuality, grief, loss and nostalgia. It was published in Japan in 1987 and became a best seller. It was published in English in 1989, then again in 2000. It has also been translated into French, German and Italian, among other languages. A film adaptation was released in Japan in 2010. The film debuted at the Venice International Film Festival and was released in the U.K. and the U.S. in 2011. Quicklets: Learn More. Read Less.",
          pageCount: 39,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=gmN-BwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=gmN-BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      }
    ]
    example2 = [
      {
        id: 'PGR2AwAAQBAJ',
        volumeInfo: {
          title: 'To Kill a Mockingbird',
          authors: ['Harper Lee'],
          publishedDate: '2014-07-08',
          description:
            "Voted America's Best-Loved Novel in PBS's The Great American Read Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
          pageCount: 336,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: '0NEbHGREK7cC',
        volumeInfo: {
          title: 'To Kill a Mockingbird',
          authors: ['Harper Lee'],
          publishedDate: '1970',
          description:
            'Required reading in most high schools, this Pulitzer Prize winning novel was originally published in 1969 and was voted the best book of the century by Library Journal.',
          pageCount: 80,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=0NEbHGREK7cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=0NEbHGREK7cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: '78VrOOWSQ6UC',
        volumeInfo: {
          title: 'To Kill a Mockingbird LP',
          authors: ['Harper Lee'],
          publishedDate: '2010-05-11',
          description:
            "\"Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.\" A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel—a black man charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with rich humor and unswerving honesty the irrationality of adult attitudes toward race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence, and hypocrisy is pricked by the stamina and quiet heroism of one man's struggle for justice—but the weight of history will only tolerate so much. One of the best-loved classics of all time, To Kill a Mockingbird has earned many dis-tinctions since its original publication in 1960. It has won the Pulitzer Prize, been translated into more than forty languages, sold more than forty million copies worldwide, and been made into an enormously popular movie. It was also named the best novel of the twentieth century by librarians across the country (Library Journal). HarperCollins is proud to celebrate the fiftieth anniversary of the book's publication with this special hardcover edition.",
          pageCount: 480,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=78VrOOWSQ6UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=78VrOOWSQ6UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'EjFbDwAAQBAJ',
        volumeInfo: {
          title: 'Why To Kill a Mockingbird Matters',
          authors: ['Tom Santopietro'],
          publishedDate: '2018-06-19',
          description:
            "Tom Santopietro, an author well-known for his writing about American popular culture, delves into the heart of the beloved classic and shows readers why To Kill a Mockingbird matters more today than ever before. With 40 million copies sold, To Kill a Mockingbird’s poignant but clear eyed examination of human nature has cemented its status as a global classic. Tom Santopietro's new book, Why To Kill a Mockingbird Matters, takes a 360 degree look at the Mockingbird phenomenon both on page and screen. Santopietro traces the writing of To Kill a Mockingbird, the impact of the Pulitzer Prize, and investigates the claims that Lee’s book is actually racist. Here for the first time is the full behind the scenes story regarding the creation of the 1962 film, one which entered the American consciousness in a way that few other films ever have. From the earliest casting sessions to the Oscars and the 50th Anniversary screening at the White House, Santopietro examines exactly what makes the movie and Gregory Peck’s unforgettable performance as Atticus Finch so captivating. As Americans yearn for an end to divisiveness, there is no better time to look at the significance of Harper Lee's book, the film, and all that came after.",
          pageCount: 320,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=EjFbDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=EjFbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'ayJpGQeyxgkC',
        volumeInfo: {
          title: 'To Kill a Mockingbird 40th',
          authors: ['Harper Lee'],
          publishedDate: '1999-11-03',
          description:
            'The explosion of racial hate and violence in a small Alabama town is viewed by a little girl whose father defends a Black man accused of rape',
          pageCount: 323,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=ayJpGQeyxgkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=ayJpGQeyxgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'RyJtJZPX8jwC',
        volumeInfo: {
          title: "Harper Lee's To Kill a Mockingbird",
          authors: ['Michael J. Meyer'],
          publishedDate: '2010-10-14',
          description:
            "To commemorate To Kill a Mockingbird's 50th anniversary, Meyer has assembled a collection of new essays that celebrate this enduring work of American literature. These essays approach the novel from educational, legal, social, and thematic perspectives.",
          pageCount: 290,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=RyJtJZPX8jwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=RyJtJZPX8jwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'LLi5DCO3COEC',
        volumeInfo: {
          title: 'To Kill a Mockingbird',
          authors: ['Harper Lee'],
          publishedDate: '1989',
          description:
            'This teaching guide includes focusing on the background of the novel, elements of the novel, vocabulary from the novel, plot synopsis and literary focus, reading guide questions, testing on the novel with answer key.',
          pageCount: 48,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=LLi5DCO3COEC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=LLi5DCO3COEC&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'P6bzCgUuVroC',
        volumeInfo: {
          title: "Harper Lee's To Kill a Mockingbird",
          authors: ['Christopher Sergel'],
          publishedDate: '1970',
          pageCount: 202,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=P6bzCgUuVroC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=P6bzCgUuVroC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'e9NBjdlSBMUC',
        volumeInfo: {
          title: 'To Kill a Mockingbird',
          authors: ['Catriona Mills'],
          publishedDate: '2011-08-01',
          description:
            'A study guide to the popular novel offers a chapter-by-chapter analysis of the text; character summaries; and an examination of themes, issues, and values.',
          pageCount: 68,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=e9NBjdlSBMUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=e9NBjdlSBMUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      },
      {
        id: 'LaMTiorjM9cC',
        volumeInfo: {
          title: "Harper Lee's To Kill a Mockingbird",
          authors: ['Harold Bloom', 'Harper Lee'],
          publishedDate: '2010',
          description:
            "The Crucible still has permanence and relevance a half century after its initial publication. This powerful political drama set amidst the Salem witch trials is commonly understood as Arthur Miller's poignant response to McCarthyism. This new edition featuring new critical essays examines this important work.",
          pageCount: 109,
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=LaMTiorjM9cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=LaMTiorjM9cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'en'
        }
      }
    ]
  })
  it('takes an array of books and returns another array of books', () => {
    expect(parseBooks([])).to.be.an('array')
  })
  it('returns an array of the same length', () => {
    expect(parseBooks(example1).length).to.equal(10)
  })
  it('takes the volumeInfo property and sets it at surface level', () => {
    //   expect(parseBooks(example1)).to.eql([]) TODO
  })
})
