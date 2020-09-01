import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  slides = getSlides();
  setIndex = 0;
  slideIndex = 0;
  timer;
  step = 0;
  help = false;

  constructor() { }

  ngOnInit() {
    this.timer = startTimer(60 * 8, document.querySelector('#time'), () => {
      clearInterval(this.timer);
      alert('Время закончилось.. Но вы можете продолжать');
    });
  }

  setHelp() {
    this.help = true;
  }

  next() {
    setTimeout(() => this.content.scrollToTop(0));
    this.help = false;

    if (this.slideIndex < this.slides[this.setIndex].length - 1) {
      this.slideIndex += 1;
    } else {
      this.slideIndex = 0;

      if (this.step < 2) {
        this.step += 1;
      } else {
        this.step = 0;
        this.setIndex += 1;
        clearInterval(this.timer);
        this.timer = startTimer(60 * 6, document.querySelector('#time'), () => {
          clearInterval(this.timer);
        });
      }
    }
  }
}

function startTimer(duration, display, endcallback) {
  var timer = duration, minutes, seconds;
  return setInterval(function () {
      minutes = parseInt(String(timer / 60), 10);
      seconds = Math.max(parseInt(String(timer % 60), 10), 0);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (timer < 0) {
        endcallback();
      } else {
        timer--;
      }
  }, 1000);
}

function getSlides() {
  return [
    [
      {
        "russian": "мужчина",
        "spanish": "hombre",
        "speak": "‘омбрэ",
        "image": "https://picsum.photos/301",
        "asoc": {
          "src": "https://picsum.photos/501",
          "name": [
            "Ом",
            "лет1"
          ]
        }
      },
      {
        "russian": "муж",
        "spanish": "marido",
        "speak": "ма’ридо",
        "image": "https://picsum.photos/302",
        "asoc": {
          "src": "https://picsum.photos/502",
          "name": [
            "Ом",
            "лет2"
          ]
        }
      },
      {
        "russian": "женщина",
        "spanish": "mujer",
        "speak": "му’хэр",
        "image": "https://picsum.photos/303",
        "asoc": {
          "src": "https://picsum.photos/503",
          "name": [
            "Ом",
            "лет3"
          ]
        }
      },
      {
        "russian": "ребенок",
        "spanish": "niño",
        "speak": "‘ниньо",
        "image": "https://picsum.photos/304",
        "asoc": {
          "src": "https://picsum.photos/504",
          "name": [
            "Ом",
            "лет4"
          ]
        }
      },
      {
        "russian": "учитель",
        "spanish": "maestro",
        "speak": "ма’эстро",
        "image": "https://picsum.photos/305",
        "asoc": {
          "src": "https://picsum.photos/505",
          "name": [
            "Ом",
            "лет5"
          ]
        }
      },
      {
        "russian": "водитель",
        "spanish": "conductor",
        "speak": "кондук’тор",
        "image": "https://picsum.photos/306",
        "asoc": {
          "src": "https://picsum.photos/506",
          "name": [
            "Ом",
            "лет6"
          ]
        }
      },
      {
        "russian": "рабочий",
        "spanish": "obrero",
        "speak": "об’рэро",
        "image": "https://picsum.photos/307",
        "asoc": {
          "src": "https://picsum.photos/507",
          "name": [
            "Ом",
            "лет7"
          ]
        }
      },
      {
        "russian": "медсестра",
        "spanish": "enfermera",
        "speak": "энфэр’мэра",
        "image": "https://picsum.photos/308",
        "asoc": {
          "src": "https://picsum.photos/508",
          "name": [
            "Ом",
            "лет8"
          ]
        }
      },
      {
        "russian": "продавец",
        "spanish": "vendedor",
        "speak": "вэндэ’дор",
        "image": "https://picsum.photos/309",
        "asoc": {
          "src": "https://picsum.photos/509",
          "name": [
            "Ом",
            "лет9"
          ]
        }
      },
      {
        "russian": "улица",
        "spanish": "calle",
        "speak": "‘калье",
        "image": "https://picsum.photos/310",
        "asoc": {
          "src": "https://picsum.photos/510",
          "name": [
            "Ом",
            "лет10"
          ]
        }
      }
    ],
    [
      {
        "russian": "дом",
        "spanish": "casa",
        "speak": "‘каса",
        "image": "https://picsum.photos/311",
        "asoc": {
          "src": "https://picsum.photos/511",
          "name": [
            "Ом",
            "лет11"
          ]
        }
      },
      {
        "russian": "церковь",
        "spanish": "iglesia",
        "speak": "иг’лесиа",
        "image": "https://picsum.photos/312",
        "asoc": {
          "src": "https://picsum.photos/512",
          "name": [
            "Ом",
            "лет12"
          ]
        }
      },
      {
        "russian": "река",
        "spanish": "río",
        "speak": "рио",
        "image": "https://picsum.photos/313",
        "asoc": {
          "src": "https://picsum.photos/513",
          "name": [
            "Ом",
            "лет13"
          ]
        }
      },
      {
        "russian": "остановка",
        "spanish": "parada",
        "speak": "па’рада",
        "image": "https://picsum.photos/314",
        "asoc": {
          "src": "https://picsum.photos/514",
          "name": [
            "Ом",
            "лет14"
          ]
        }
      },
      {
        "russian": "гора",
        "spanish": "montaña",
        "speak": "мон’танья",
        "image": "https://picsum.photos/315",
        "asoc": {
          "src": "https://picsum.photos/515",
          "name": [
            "Ом",
            "лет15"
          ]
        }
      },
      {
        "russian": "рынок",
        "spanish": "mercado",
        "speak": "мэр’кадо",
        "image": "https://picsum.photos/316",
        "asoc": {
          "src": "https://picsum.photos/516",
          "name": [
            "Ом",
            "лет16"
          ]
        }
      },
      {
        "russian": "кухня",
        "spanish": "cocina",
        "speak": "ко’сина",
        "image": "https://picsum.photos/317",
        "asoc": {
          "src": "https://picsum.photos/517",
          "name": [
            "Ом",
            "лет17"
          ]
        }
      },
      {
        "russian": "кровать",
        "spanish": "cama",
        "speak": "‘кама",
        "image": "https://picsum.photos/318",
        "asoc": {
          "src": "https://picsum.photos/518",
          "name": [
            "Ом",
            "лет18"
          ]
        }
      },
      {
        "russian": "стол",
        "spanish": "mesa",
        "speak": "‘мэса",
        "image": "https://picsum.photos/319",
        "asoc": {
          "src": "https://picsum.photos/519",
          "name": [
            "Ом",
            "лет19"
          ]
        }
      },
      {
        "russian": "стул",
        "spanish": "silla",
        "speak": "‘силья",
        "image": "https://picsum.photos/320",
        "asoc": {
          "src": "https://picsum.photos/520",
          "name": [
            "Ом",
            "лет20"
          ]
        }
      }
    ],
    [
      {
        "russian": "потолок",
        "spanish": "techo",
        "speak": "‘тэчо",
        "image": "https://picsum.photos/321",
        "asoc": {
          "src": "https://picsum.photos/521",
          "name": [
            "Ом",
            "лет21"
          ]
        }
      },
      {
        "russian": "хлеб",
        "spanish": "pan",
        "speak": "пан",
        "image": "https://picsum.photos/322",
        "asoc": {
          "src": "https://picsum.photos/522",
          "name": [
            "Ом",
            "лет22"
          ]
        }
      },
      {
        "russian": "сыр",
        "spanish": "queso",
        "speak": "‘кэсо",
        "image": "https://picsum.photos/323",
        "asoc": {
          "src": "https://picsum.photos/523",
          "name": [
            "Ом",
            "лет23"
          ]
        }
      },
      {
        "russian": "ягода",
        "spanish": "baya",
        "speak": "‘бая",
        "image": "https://picsum.photos/324",
        "asoc": {
          "src": "https://picsum.photos/524",
          "name": [
            "Ом",
            "лет24"
          ]
        }
      },
      {
        "russian": "мёд",
        "spanish": "miel",
        "speak": "‘мьель",
        "image": "https://picsum.photos/325",
        "asoc": {
          "src": "https://picsum.photos/525",
          "name": [
            "Ом",
            "лет25"
          ]
        }
      },
      {
        "russian": "гриб",
        "spanish": "seta",
        "speak": "‘сэта",
        "image": "https://picsum.photos/326",
        "asoc": {
          "src": "https://picsum.photos/526",
          "name": [
            "Ом",
            "лет26"
          ]
        }
      },
      {
        "russian": "лук",
        "spanish": "cebolla",
        "speak": "сэ’болья",
        "image": "https://picsum.photos/327",
        "asoc": {
          "src": "https://picsum.photos/527",
          "name": [
            "Ом",
            "лет27"
          ]
        }
      },
      {
        "russian": "груша",
        "spanish": "pera",
        "speak": "‘пэра",
        "image": "https://picsum.photos/328",
        "asoc": {
          "src": "https://picsum.photos/528",
          "name": [
            "Ом",
            "лет28"
          ]
        }
      },
      {
        "russian": "свекла",
        "spanish": "remolacha",
        "speak": "рэмо’лача",
        "image": "https://picsum.photos/329",
        "asoc": {
          "src": "https://picsum.photos/529",
          "name": [
            "Ом",
            "лет29"
          ]
        }
      },
      {
        "russian": "дыня",
        "spanish": "melón",
        "speak": "мэ’лон",
        "image": "https://picsum.photos/330",
        "asoc": {
          "src": "https://picsum.photos/530",
          "name": [
            "Ом",
            "лет30"
          ]
        }
      }
    ],
    [
      {
        "russian": "арбуз",
        "spanish": "sandía",
        "speak": "сан’дия",
        "image": "https://picsum.photos/331",
        "asoc": {
          "src": "https://picsum.photos/531",
          "name": [
            "Ом",
            "лет31"
          ]
        }
      },
      {
        "russian": "пирожное",
        "spanish": "pastel",
        "speak": "пас’тэль",
        "image": "https://picsum.photos/332",
        "asoc": {
          "src": "https://picsum.photos/532",
          "name": [
            "Ом",
            "лет32"
          ]
        }
      },
      {
        "russian": "торт",
        "spanish": "tarta",
        "speak": "‘тарта",
        "image": "https://picsum.photos/333",
        "asoc": {
          "src": "https://picsum.photos/533",
          "name": [
            "Ом",
            "лет33"
          ]
        }
      },
      {
        "russian": "мясо",
        "spanish": "carne",
        "speak": "‘карнэ",
        "image": "https://picsum.photos/334",
        "asoc": {
          "src": "https://picsum.photos/534",
          "name": [
            "Ом",
            "лет34"
          ]
        }
      },
      {
        "russian": "картофель",
        "spanish": "patata",
        "speak": "па’тата",
        "image": "https://picsum.photos/335",
        "asoc": {
          "src": "https://picsum.photos/535",
          "name": [
            "Ом",
            "лет35"
          ]
        }
      },
      {
        "russian": "огурец",
        "spanish": "pepino",
        "speak": "пэ’пино",
        "image": "https://picsum.photos/336",
        "asoc": {
          "src": "https://picsum.photos/536",
          "name": [
            "Ом",
            "лет36"
          ]
        }
      },
      {
        "russian": "капуста",
        "spanish": "col",
        "speak": "‘коль",
        "image": "https://picsum.photos/337",
        "asoc": {
          "src": "https://picsum.photos/537",
          "name": [
            "Ом",
            "лет37"
          ]
        }
      },
      {
        "russian": "gachas",
        "spanish": "каша",
        "speak": "‘гачас",
        "image": "https://picsum.photos/338",
        "asoc": {
          "src": "https://picsum.photos/538",
          "name": [
            "Ом",
            "лет38"
          ]
        }
      },
      {
        "russian": "суп",
        "spanish": "sopa",
        "speak": "‘сопа",
        "image": "https://picsum.photos/339",
        "asoc": {
          "src": "https://picsum.photos/539",
          "name": [
            "Ом",
            "лет39"
          ]
        }
      },
      {
        "russian": "бутерброд",
        "spanish": "bocadillo",
        "speak": "бока’дильо",
        "image": "https://picsum.photos/340",
        "asoc": {
          "src": "https://picsum.photos/540",
          "name": [
            "Ом",
            "лет40"
          ]
        }
      }
    ],
    [
      {
        "russian": "газировка",
        "spanish": "soda",
        "speak": "‘сода",
        "image": "https://picsum.photos/341",
        "asoc": {
          "src": "https://picsum.photos/541",
          "name": [
            "Ом",
            "лет41"
          ]
        }
      },
      {
        "russian": "вода",
        "spanish": "agua",
        "speak": "‘агуа",
        "image": "https://picsum.photos/342",
        "asoc": {
          "src": "https://picsum.photos/542",
          "name": [
            "Ом",
            "лет42"
          ]
        }
      },
      {
        "russian": "чай",
        "spanish": "té",
        "speak": "тэ",
        "image": "https://picsum.photos/343",
        "asoc": {
          "src": "https://picsum.photos/543",
          "name": [
            "Ом",
            "лет43"
          ]
        }
      },
      {
        "russian": "молоко",
        "spanish": "leche",
        "speak": "‘лэче",
        "image": "https://picsum.photos/344",
        "asoc": {
          "src": "https://picsum.photos/544",
          "name": [
            "Ом",
            "лет44"
          ]
        }
      },
      {
        "russian": "сок",
        "spanish": "jugo",
        "speak": "‘хуго",
        "image": "https://picsum.photos/345",
        "asoc": {
          "src": "https://picsum.photos/545",
          "name": [
            "Ом",
            "лет45"
          ]
        }
      },
      {
        "russian": "яблоко",
        "spanish": "manzana",
        "speak": "ман’сана",
        "image": "https://picsum.photos/346",
        "asoc": {
          "src": "https://picsum.photos/546",
          "name": [
            "Ом",
            "лет46"
          ]
        }
      },
      {
        "russian": "апельсин",
        "spanish": "naranja",
        "speak": "на’ранха",
        "image": "https://picsum.photos/347",
        "asoc": {
          "src": "https://picsum.photos/547",
          "name": [
            "Ом",
            "лет47"
          ]
        }
      },
      {
        "russian": "ананас",
        "spanish": "piña",
        "speak": "‘пинья",
        "image": "https://picsum.photos/348",
        "asoc": {
          "src": "https://picsum.photos/548",
          "name": [
            "Ом",
            "лет48"
          ]
        }
      },
      {
        "russian": "рис",
        "spanish": "arroz",
        "speak": "ар’рос",
        "image": "https://picsum.photos/349",
        "asoc": {
          "src": "https://picsum.photos/549",
          "name": [
            "Ом",
            "лет49"
          ]
        }
      },
      {
        "russian": "лапша",
        "spanish": "fideos",
        "speak": "фи’дэос",
        "image": "https://picsum.photos/350",
        "asoc": {
          "src": "https://picsum.photos/550",
          "name": [
            "Ом",
            "лет50"
          ]
        }
      }
    ],
    [
      {
        "russian": "свинина",
        "spanish": "cerdo",
        "speak": "‘сэрдо",
        "image": "https://picsum.photos/351",
        "asoc": {
          "src": "https://picsum.photos/551",
          "name": [
            "Ом",
            "лет51"
          ]
        }
      },
      {
        "russian": "цыпленок",
        "spanish": "pollo",
        "speak": "‘польйо",
        "image": "https://picsum.photos/352",
        "asoc": {
          "src": "https://picsum.photos/552",
          "name": [
            "Ом",
            "лет52"
          ]
        }
      },
      {
        "russian": "котлета",
        "spanish": "chuleta",
        "speak": "чу’лета",
        "image": "https://picsum.photos/353",
        "asoc": {
          "src": "https://picsum.photos/553",
          "name": [
            "Ом",
            "лет53"
          ]
        }
      },
      {
        "russian": "горох",
        "spanish": "guisante",
        "speak": "ги’сантэ",
        "image": "https://picsum.photos/354",
        "asoc": {
          "src": "https://picsum.photos/554",
          "name": [
            "Ом",
            "лет54"
          ]
        }
      },
      {
        "russian": "булочка",
        "spanish": "bollo",
        "speak": "‘больо",
        "image": "https://picsum.photos/355",
        "asoc": {
          "src": "https://picsum.photos/555",
          "name": [
            "Ом",
            "лет55"
          ]
        }
      },
      {
        "russian": "рыба",
        "spanish": "pescado",
        "speak": "пэс’кадо",
        "image": "https://picsum.photos/356",
        "asoc": {
          "src": "https://picsum.photos/556",
          "name": [
            "Ом",
            "лет56"
          ]
        }
      },
      {
        "russian": "мороженое",
        "spanish": "helado",
        "speak": "э’ладо",
        "image": "https://picsum.photos/357",
        "asoc": {
          "src": "https://picsum.photos/557",
          "name": [
            "Ом",
            "лет57"
          ]
        }
      },
      {
        "russian": "орех",
        "spanish": "nuez",
        "speak": "‘нуэз",
        "image": "https://picsum.photos/358",
        "asoc": {
          "src": "https://picsum.photos/558",
          "name": [
            "Ом",
            "лет58"
          ]
        }
      },
      {
        "russian": "яйцо",
        "spanish": "huevo",
        "speak": "у’эво",
        "image": "https://picsum.photos/359",
        "asoc": {
          "src": "https://picsum.photos/559",
          "name": [
            "Ом",
            "лет59"
          ]
        }
      },
      {
        "russian": "чашка",
        "spanish": "taza",
        "speak": "‘таза",
        "image": "https://picsum.photos/360",
        "asoc": {
          "src": "https://picsum.photos/560",
          "name": [
            "Ом",
            "лет60"
          ]
        }
      }
    ],
    [
      {
        "russian": "стакан",
        "spanish": "vaso",
        "speak": "‘вазо",
        "image": "https://picsum.photos/361",
        "asoc": {
          "src": "https://picsum.photos/561",
          "name": [
            "Ом",
            "лет61"
          ]
        }
      },
      {
        "russian": "тарелка",
        "spanish": "plato",
        "speak": "‘плато",
        "image": "https://picsum.photos/362",
        "asoc": {
          "src": "https://picsum.photos/562",
          "name": [
            "Ом",
            "лет62"
          ]
        }
      },
      {
        "russian": "ложка",
        "spanish": "cuchara",
        "speak": "ку’чара",
        "image": "https://picsum.photos/363",
        "asoc": {
          "src": "https://picsum.photos/563",
          "name": [
            "Ом",
            "лет63"
          ]
        }
      },
      {
        "russian": "вилка",
        "spanish": "tenedor",
        "speak": "тэнэ’дор",
        "image": "https://picsum.photos/364",
        "asoc": {
          "src": "https://picsum.photos/564",
          "name": [
            "Ом",
            "лет64"
          ]
        }
      },
      {
        "russian": "нож",
        "spanish": "cuchillo",
        "speak": "ку’чильо",
        "image": "https://picsum.photos/365",
        "asoc": {
          "src": "https://picsum.photos/565",
          "name": [
            "Ом",
            "лет65"
          ]
        }
      },
      {
        "russian": "самолет",
        "spanish": "avión",
        "speak": "авь’ён",
        "image": "https://picsum.photos/366",
        "asoc": {
          "src": "https://picsum.photos/566",
          "name": [
            "Ом",
            "лет66"
          ]
        }
      },
      {
        "russian": "автомобиль",
        "spanish": "coche",
        "speak": "‘коче",
        "image": "https://picsum.photos/367",
        "asoc": {
          "src": "https://picsum.photos/567",
          "name": [
            "Ом",
            "лет67"
          ]
        }
      },
      {
        "russian": "велосипед",
        "spanish": "bicicleta",
        "speak": "биси’клета",
        "image": "https://picsum.photos/368",
        "asoc": {
          "src": "https://picsum.photos/568",
          "name": [
            "Ом",
            "лет68"
          ]
        }
      },
      {
        "russian": "ручка",
        "spanish": "pluma",
        "speak": "‘плума",
        "image": "https://picsum.photos/369",
        "asoc": {
          "src": "https://picsum.photos/569",
          "name": [
            "Ом",
            "лет69"
          ]
        }
      },
      {
        "russian": "книга",
        "spanish": "libro",
        "speak": "‘либро",
        "image": "https://picsum.photos/370",
        "asoc": {
          "src": "https://picsum.photos/570",
          "name": [
            "Ом",
            "лет70"
          ]
        }
      }
    ],
    [
      {
        "russian": "часы",
        "spanish": "reloj",
        "speak": "рэ’лох",
        "image": "https://picsum.photos/371",
        "asoc": {
          "src": "https://picsum.photos/571",
          "name": [
            "Ом",
            "лет71"
          ]
        }
      },
      {
        "russian": "расчёска",
        "spanish": "peine",
        "speak": "’пэйнэ",
        "image": "https://picsum.photos/372",
        "asoc": {
          "src": "https://picsum.photos/572",
          "name": [
            "Ом",
            "лет72"
          ]
        }
      },
      {
        "russian": "утюг",
        "spanish": "plancha",
        "speak": "‘планча",
        "image": "https://picsum.photos/373",
        "asoc": {
          "src": "https://picsum.photos/573",
          "name": [
            "Ом",
            "лет73"
          ]
        }
      },
      {
        "russian": "сумка",
        "spanish": "bolsa",
        "speak": "‘больса",
        "image": "https://picsum.photos/374",
        "asoc": {
          "src": "https://picsum.photos/574",
          "name": [
            "Ом",
            "лет74"
          ]
        }
      },
      {
        "russian": "карта",
        "spanish": "mapa",
        "speak": "‘мапа",
        "image": "https://picsum.photos/375",
        "asoc": {
          "src": "https://picsum.photos/575",
          "name": [
            "Ом",
            "лет75"
          ]
        }
      },
      {
        "russian": "чемодан",
        "spanish": "maleta",
        "speak": "ма’лета",
        "image": "https://picsum.photos/376",
        "asoc": {
          "src": "https://picsum.photos/576",
          "name": [
            "Ом",
            "лет76"
          ]
        }
      },
      {
        "russian": "подарок",
        "spanish": "regalo",
        "speak": "рэ’гало",
        "image": "https://picsum.photos/377",
        "asoc": {
          "src": "https://picsum.photos/577",
          "name": [
            "Ом",
            "лет77"
          ]
        }
      },
      {
        "russian": "фотоаппарат",
        "spanish": "cámara",
        "speak": "‘камара",
        "image": "https://picsum.photos/378",
        "asoc": {
          "src": "https://picsum.photos/578",
          "name": [
            "Ом",
            "лет78"
          ]
        }
      },
      {
        "russian": "компьютер",
        "spanish": "ordenador",
        "speak": "ордэна’дор",
        "image": "https://picsum.photos/379",
        "asoc": {
          "src": "https://picsum.photos/579",
          "name": [
            "Ом",
            "лет79"
          ]
        }
      },
      {
        "russian": "фильм",
        "spanish": "película",
        "speak": "пэ’ликула",
        "image": "https://picsum.photos/380",
        "asoc": {
          "src": "https://picsum.photos/580",
          "name": [
            "Ом",
            "лет80"
          ]
        }
      }
    ],
    [
      {
        "russian": "ваза",
        "spanish": "florero",
        "speak": "фло’рэро",
        "image": "https://picsum.photos/381",
        "asoc": {
          "src": "https://picsum.photos/581",
          "name": [
            "Ом",
            "лет81"
          ]
        }
      },
      {
        "russian": "картина",
        "spanish": "cuadro",
        "speak": "ку’адро",
        "image": "https://picsum.photos/382",
        "asoc": {
          "src": "https://picsum.photos/582",
          "name": [
            "Ом",
            "лет82"
          ]
        }
      },
      {
        "russian": "мяч",
        "spanish": "bola",
        "speak": "‘бола",
        "image": "https://picsum.photos/383",
        "asoc": {
          "src": "https://picsum.photos/583",
          "name": [
            "Ом",
            "лет83"
          ]
        }
      },
      {
        "russian": "воздушный шар",
        "spanish": "globo",
        "speak": "‘глобо",
        "image": "https://picsum.photos/384",
        "asoc": {
          "src": "https://picsum.photos/584",
          "name": [
            "Ом",
            "лет84"
          ]
        }
      },
      {
        "russian": "игрушка",
        "spanish": "juguete",
        "speak": "ху’гэтэ",
        "image": "https://picsum.photos/385",
        "asoc": {
          "src": "https://picsum.photos/585",
          "name": [
            "Ом",
            "лет85"
          ]
        }
      },
      {
        "russian": "счёт",
        "spanish": "cuenta",
        "speak": "ку’энта",
        "image": "https://picsum.photos/386",
        "asoc": {
          "src": "https://picsum.photos/586",
          "name": [
            "Ом",
            "лет86"
          ]
        }
      },
      {
        "russian": "конверт",
        "spanish": "sobre",
        "speak": "‘собрэ",
        "image": "https://picsum.photos/387",
        "asoc": {
          "src": "https://picsum.photos/587",
          "name": [
            "Ом",
            "лет87"
          ]
        }
      },
      {
        "russian": "бумага",
        "spanish": "papel",
        "speak": "па’пэль",
        "image": "https://picsum.photos/388",
        "asoc": {
          "src": "https://picsum.photos/588",
          "name": [
            "Ом",
            "лет88"
          ]
        }
      },
      {
        "russian": "письмо",
        "spanish": "carta",
        "speak": "‘курта",
        "image": "https://picsum.photos/389",
        "asoc": {
          "src": "https://picsum.photos/589",
          "name": [
            "Ом",
            "лет89"
          ]
        }
      },
      {
        "russian": "обувь",
        "spanish": "zapatos",
        "speak": "са’патос",
        "image": "https://picsum.photos/390",
        "asoc": {
          "src": "https://picsum.photos/590",
          "name": [
            "Ом",
            "лет90"
          ]
        }
      }
    ],
    [
      {
        "russian": "пальто",
        "spanish": "abrigo",
        "speak": "аб’риго",
        "image": "https://picsum.photos/391",
        "asoc": {
          "src": "https://picsum.photos/591",
          "name": [
            "Ом",
            "лет91"
          ]
        }
      },
      {
        "russian": "платье",
        "spanish": "vestido",
        "speak": "вэс’тидо",
        "image": "https://picsum.photos/392",
        "asoc": {
          "src": "https://picsum.photos/592",
          "name": [
            "Ом",
            "лет92"
          ]
        }
      },
      {
        "russian": "рубашка",
        "spanish": "camisa",
        "speak": "ка’миса",
        "image": "https://picsum.photos/393",
        "asoc": {
          "src": "https://picsum.photos/593",
          "name": [
            "Ом",
            "лет93"
          ]
        }
      },
      {
        "russian": "юбка",
        "spanish": "falda",
        "speak": "‘фальда",
        "image": "https://picsum.photos/394",
        "asoc": {
          "src": "https://picsum.photos/594",
          "name": [
            "Ом",
            "лет94"
          ]
        }
      },
      {
        "russian": "перчатка",
        "spanish": "guante",
        "speak": "гу’антэ",
        "image": "https://picsum.photos/395",
        "asoc": {
          "src": "https://picsum.photos/595",
          "name": [
            "Ом",
            "лет95"
          ]
        }
      },
      {
        "russian": "пиджак",
        "spanish": "chaqueta",
        "speak": "ча’кэта",
        "image": "https://picsum.photos/396",
        "asoc": {
          "src": "https://picsum.photos/596",
          "name": [
            "Ом",
            "лет96"
          ]
        }
      },
      {
        "russian": "шарф",
        "spanish": "bufanda",
        "speak": "бу’фанда",
        "image": "https://picsum.photos/397",
        "asoc": {
          "src": "https://picsum.photos/597",
          "name": [
            "Ом",
            "лет97"
          ]
        }
      },
      {
        "russian": "футболка",
        "spanish": "camiseta",
        "speak": "ками’сэта",
        "image": "https://picsum.photos/398",
        "asoc": {
          "src": "https://picsum.photos/598",
          "name": [
            "Ом",
            "лет98"
          ]
        }
      },
      {
        "russian": "галстук",
        "spanish": "corbata",
        "speak": "кор’бата",
        "image": "https://picsum.photos/399",
        "asoc": {
          "src": "https://picsum.photos/599",
          "name": [
            "Ом",
            "лет99"
          ]
        }
      },
      {
        "russian": "брюки",
        "spanish": "pantalones",
        "speak": "панта’лонэс",
        "image": "https://picsum.photos/400",
        "asoc": {
          "src": "https://picsum.photos/600",
          "name": [
            "Ом",
            "лет100"
          ]
        }
      }
    ]
  ]
}
