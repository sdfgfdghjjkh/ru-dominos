// Pizzas
import PaneerTikkaPizza from "./images/pizzas/PaneerTikkaPizza.jpeg";
import FourCheesePizza from "./images/pizzas/FourCheesePizza.jpeg";
import VeggieLegendJalapenos from "./images/pizzas/VeggieLegendJalapenos.jpeg";
import ChickenTikkaPizza from "./images/pizzas/ChickenTikkaPizza.jpeg";
import PhillyCheeseSteakPizza from "./images/pizzas/PhillyCheeseSteakPizza.jpeg";
import PhillyCheeseSteakDynamitePizza from "./images/pizzas/PhillyCheeseSteakDynamitePizza.jpeg";
import ExtravaganzzaPizza from "./images/pizzas/ExtravaganzzaPizza.jpeg";
import ChickenDynamitePizza from "./images/pizzas/ChickenDynamitePizza.jpeg";
import ChickenHotDynamitePizza from "./images/pizzas/ChickenHotDynamitePizza.jpeg";
import LegendChickenRanch from "./images/pizzas/LegendChickenRanch.jpeg";
import ChickenFeastPizza from "./images/pizzas/ChickenFeastPizza.jpeg";
import AlfredoPizza from "./images/pizzas/AlfredoPizza.jpeg";
import MargheritaPizza from "./images/pizzas/MargheritaPizza.jpeg";
import VeggiePizza from "./images/pizzas/VeggiePizza.jpeg";
import MexicanGreenWavePizza from "./images/pizzas/MexicanGreenWavePizza.jpeg";
import PepperoniPizza from "./images/pizzas/PepperoniPizza.jpeg";
import LegendChickenRanchPizza from "./images/pizzas/LegendChickenRanchPizza.jpeg";
import LegendChickenBBQPizza from "./images/pizzas/LegendChickenBBQPizza.jpeg";
import HawaiianPizza from "./images/pizzas/HawaiianPizza.jpeg";
import ChickenMemphisBBQPizza from "./images/pizzas/ChickenMemphisBBQPizza.jpeg";
import MeatzzaPizza from "./images/pizzas/MeatzzaPizza.jpeg";
import TexMexPizza from "./images/pizzas/TexMexPizza.jpeg";
import ItalianoPizza from "./images/pizzas/ItalianoPizza.jpeg";
import SpicyPizza from "./images/pizzas/SpicyPizza.jpeg";
import DeluxePizza from "./images/pizzas/DeluxePizza.jpeg";
import LegendChickenHotPizza from "./images/pizzas/LegendChickenHotPizza.jpeg";

// Chicken
import ChickenKickers from "./images/productItems/Chicken/ChickenKickers.jpeg";
import ChickenWingsBBQ from "./images/productItems/Chicken/ChickenWingsBBQ.jpeg";
import ChickenWingsHot from "./images/productItems/Chicken/ChickenWingsHot.jpeg";

// Sides
import BreadSticks from "./images/productItems/Sides/BreadSticks.jpeg";
import CheesyBreadSticks from "./images/productItems/Sides/CheesyBreadSticks.jpeg";
import StuffedCheesy from "./images/productItems/Sides/StuffedCheesy.jpeg";

// Drinks
import SevenUp from "./images/productItems/Drinks/7Up.jpeg";
import DietPepsi from "./images/productItems/Drinks/DietPepsi.jpeg";
import OrangeMirinda from "./images/productItems/Drinks/OrangeMirinda.jpeg";
import Pepsi from "./images/productItems/Drinks/Pepsi.jpeg";
import Water from "./images/productItems/Drinks/Water.jpeg";

// Desserts
import CinnamonSticks from "./images/productItems/Desserts/CinnamonSticks.jpeg";
import CinnamonSticksWithPineapple from "./images/productItems/Desserts/CinnamonSticksWithPineapple.jpeg";
import ChocolateLavaSouffle from "./images/ChocolateLavaSouffle.jpeg";
import Crownies from "./images/Crownies.jpeg";

// Extras
import BBQSauce from "./images/productItems/Extras/BBQSauce.jpeg";
import HotBuffaloSauce from "./images/productItems/Extras/HotBuffaloSauce.jpeg";
import Ketchup from "./images/productItems/Extras/Ketchup.jpeg";
import MarinaraSauce from "./images/productItems/Extras/MarinaraSauce.jpeg";
import RanchSauce from "./images/productItems/Extras/RanchSauce.jpeg";
import SweetIcingSauce from "./images/productItems/Extras/SweetIcingSauce.jpeg";

const productItems = [
  // Продукты для категории "Pizzas"
  // DOMINO'S SELECTION
  {
    name: {
      arabic: "بينير تكا بيتزا",
      english: "Панир Тикка",
    },
    category: "pizza",
    description: {
      arabic:
        "بينير تكا طازج مع فلفل أحمر وأخضر وبصل وموزاريلا وصلصة مارينارا الخاصة مع صلصة النعناع.",
      english:
        "Свежий панир тикка с красным и зеленым перцем, луком, моцареллой и фирменным соусом Маринара, покрытый мятным соусом.",
    },
    image: PaneerTikkaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p1",
  },
  {
    name: {
      arabic: "بيتزا الجبن الأربعة",
      english: "Четыре сыра",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، جبن أمريكي، طبقتين من الموزاريلا، جبنة فيتا وزعتر",
      english:
        "Соус для пиццы, американский сыр, 2 слоя моцареллы, сыр фета и орегано.",
    },
    image: FourCheesePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p2",
  },

  {
    name: {
      arabic: "بيتزا الفلفل الأحمر والرانش",
      english: "Ранчо-Пицца",
    },
    category: "pizza",
    description: {
      arabic:
        "بصل، فلفل أحمر، زيتون أسود، جالابينو، موزاريلا، جبن أمريكي مع صلصة الرانش (تحتوي صلصة الرانش على البيض).",
      english:
        "Лук, красный перец, черные оливки, перец халапеньо, моцарелла, американский сыр с соусом ранчо (соус ранчо содержит яйцо).",
    },
    image: VeggieLegendJalapenos,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p3",
  },
  {
    name: {
      arabic: "بيتزا تكا الدجاج",
      english: "Тикка с курицей",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، دجاج تكا، بصل، فلفل أخضر مع صلصة النعناع.",
      english:
        "Соус для пиццы, моцарелла, курица Тикка, лук, зеленый перец с мятным соусом.",
    },
    image: ChickenTikkaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p4",
  },
  {
    name: {
      arabic: "بيتزا شيز ستيك فيلادلفيا",
      english: "Филадельфия Чиз Стейк",
    },
    category: "pizza",
    description: {
      arabic: "جبن أمريكي، شرائح لحم بقري، فلفل أخضر، بصل، فطر وموزاريلا.",
      english:
        "Американский сыр, кусочки говяжьего стейка, зеленый перец, лук, грибы и моцарелла.",
    },
    image: PhillyCheeseSteakPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p5",
  },
  {
    name: {
      arabic: "بيتزا فيلادلفيا الديناميت",
      english: "Филадельфия Чиз Стейк Динамит",
    },
    category: "pizza",
    description: {
      arabic:
        "جبن أمريكي، شرائح لحم بقري، فلفل أخضر، بصل، فطر وموزاريلا مع صلصة الديناميت.",
      english:
        "Американский сыр, кусочки говяжьего стейка, зеленый перец, лук, грибы, моцарелла с соусом динамит.",
    },
    image: PhillyCheeseSteakDynamitePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p6",
  },
  {
    name: {
      arabic: "بيتزا إكسترافاغانزا",
      english: "Феерия",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بصل، فلفل أخضر، فطر، زيتون أسود، بقر، نقانق إيطالية وطبقة إضافية من الموزاريلا.",
      english:
        "Соус для пиццы, моцарелла, пепперони из говядины, лук, зеленый перец, грибы, черные оливки, говядина, итальянская колбаса и дополнительный слой моцареллы.",
    },
    image: ExtravaganzzaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
    id: "p7",
  },
  {
    name: {
      arabic: "بيتزا الدجاج الديناميت",
      english: "Куриный динамит",
    },
    category: "pizza",
    description: {
      arabic:
        "جبن أمريكي، فلفل أخضر، بصل، صدر دجاج مقرمش، موزاريلا، زعتر مع صلصة الديناميت.",
      english:
        "Американский сыр, зеленый перец, лук, хрустящая куриная грудка, моцарелла, орегано с соусом динамит.",
    },
    image: ChickenDynamitePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج الحار الديناميت",
      english: "Куриный горячий динамит",
    },
    category: "pizza",
    description: {
      arabic:
        "جبن أمريكي، فلفل أخضر، بصل، صدر دجاج مقرمش، موزاريلا، زعتر مع صلصة الديناميت وصلصة بفلو باردة.",
      english:
        "Американский сыр, зеленый перец, лук, хрустящая куриная грудка, моцарелла, орегано с динамитом и острыми соусами из буйволиного мяса.",
    },
    image: ChickenHotDynamitePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج والجالابينو الأسطورية مع الرانش",
      english: "Легендарное куриное ранчо и халапеньо",
    },
    category: "pizza",
    description: {
      arabic:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Jalapeno, Oregano & Ranch Sauce",
      english:
        "Американский сыр, куриная грудка на гриле, лук, моцарелла, халапеньо, орегано и соус ранч.",
    },
    image: LegendChickenRanch,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج فاست",
      english: "Куриный праздник",
    },
    category: "pizza",
    description: {
      arabic:
        "محملة بمزيج لذيذ من الدجاج المشوي والأشهر مع الدجاج الرائع وتوابلها بالجالابينو وشرائح الفلفل الأحمر.",
      english:
        "Насыщен восхитительным сочетанием курицы-гриль, знаменитых куриных коктейлей и курицы премиум-класса, приправленной халапеньо и ломтиками красного перца.",
    },
    image: ChickenFeastPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا ألفريدو",
      english: "Альфредо",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة ألفريدو الأصلية، قطع صدر دجاج مشوي، جبن موزاريلا، شرائح فطر طازجة.",
      english:
        "Оригинальный соус Альфредо, кусочки куриной грудки гриль, сыр Моцарелла, кусочки свежих грибов.",
    },
    image: AlfredoPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },

  // FAVORITE PIZZAS
  {
    name: {
      arabic: "بيتزا مارغريتا",
      english: "Маргарита",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا وجبنة الموزاريلا.",
      english: "Пицца-соус и моцарелла",
    },
    image: MargheritaPizza,
    prices: {
      20: 24,
      28: 34,
      33: 44,
    },
  },
  {
    name: {
      arabic: "بيتزا الخضار",
      english: "Вегетарианская",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، فطر وزيتون أسود.",
      english:
        "Соус для пиццы, моцарелла, лук, зеленый перец, грибы и черные оливки.",
    },
    image: VeggiePizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا الموجة الخضراء المكسيكية",
      english: "Мексиканская пицца «Зеленая волна»",
    },
    category: "pizza",
    description: {
      arabic:
        "بيتزا محشوة بالبصل المقرمش، فلفل الكابسيكوم اللذيذ والجالابينو مع الأعشاب المكسيكية.",
      english:
        "Пицца с хрустящим луком, хрустящим перцем и халапеньо с мексиканскими травами.",
    },
    image: MexicanGreenWavePizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا بيبروني",
      english: "Пепперони",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، موزاريلا وبيف بيبروني.",
      english: "Соус для пиццы, моцарелла и пепперони из говядины.",
    },
    image: PepperoniPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج والرانش الأسطورية",
      english: "Легенда Куриного Ранчо",
    },
    category: "pizza",
    description: {
      arabic: "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة الرانش.",
      english:
        "Американский сыр, куриная грудка гриль, лук, моцарелла, орегано, соус ранчо.",
    },
    image: LegendChickenRanchPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج والباربيكيو الأسطورية",
      english: "Шашлычная",
    },
    category: "pizza",
    description: {
      arabic:
        "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة الباربيكيو.",
      english:
        "Американский сыр, куриная грудка на гриле, лук, моцарелла, орегано с соусом барбекю.",
    },
    image: LegendChickenBBQPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا هاواي",
      english: "Гавайская",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، موزاريلا وبيف بيبروني وأناناس هاواي.",
      english: "Соус для пиццы, моцарелла, пепперони из говядины и гавайский ананас.",
    },
    image: HawaiianPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج ميمفيس الباربيكيو",
      english: "Куриный Мемфис Барбекю",
    },
    category: "pizza",
    description: {
      arabic: "صلصة الباربيكيو، موزاريلا، صدر دجاج مشوي وبصل.",
      english: "Соус барбекю, моцарелла, куриная грудка гриль и лук.",
    },
    image: ChickenMemphisBBQPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا ميتزا",
      english: "Митца",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بقر، نقانق إيطالية وطبقة إضافية من الموزاريلا.",
      english:
        "Соус для пиццы, моцарелла, пепперони из говядины, говядина, итальянская колбаса и дополнительный слой моцареллы.",
    },
    image: MeatzzaPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا تكس مكس",
      english: "Техас-Мексика",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، زيتون أسود، صدر دجاج مشوي، جالابينو وزعتر.",
      english:
        "Соус для пиццы, моцарелла, лук, зеленый перец, черные оливки, куриная грудка гриль, халапеньо и орегано.",
    },
    image: TexMexPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا إيطاليو",
      english: "Итальяно",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بيف بيبروني، فطر ونقانق إيطالية.",
      english:
        "Соус для пиццы, моцарелла, пепперони из говядины, грибы и итальянская колбаса.",
    },
    image: ItalianoPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا حار وحار",
      english: "Острая",
    },
    category: "pizza",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، جالابينو وبيف.",
      english:
        "Соус для пиццы, моцарелла, лук, зеленый перец, халапеньо и говядина.",
    },
    image: SpicyPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا ديلوكس",
      english: "Делюкс",
    },
    category: "pizza",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بصل، فلفف أخضر، فطر ونقانق إيطالية.",
      english:
        "Соус для пиццы, моцарелла, пепперони из говядины, лук, зеленый перец, грибы и итальянская колбаса.",
    },
    image: DeluxePizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج الحار",
      english: "Жгучая",
    },
    category: "pizza",
    description: {
      arabic:
        "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة البفلو الحارة.",
      english:
        "Американский сыр, куриная грудка на гриле, лук, моцарелла, орегано с острым соусом из буйволиного мяса",
    },
    image: LegendChickenHotPizza,
    prices: {
      20: 34,
      28: 44,
      33: 54,
    },
  },

  // Продукты для категории "Chicken"
  {
    name: {
      arabic: "شيكن كيكرز",
      english: "Куриные Кикеры",
    },
    category: "chicken",
    description: {
      arabic:
        "صدور دجاج مقرمشة مع نكهة صلصة بفلو باربيكيو حارة، يتم تقديمها مع صلصة الرانش وصلصة بفلو باربيكيو جانبية.",
      english:
        "Хрустящая куриная грудка с нотками острого соуса Буффало, подается с ранчо и острыми соусами Буффало.",
    },
    image: ChickenKickers,
    price: 25,
  },
  {
    name: {
      arabic: "أجنحة الدجاج بصلصة باربيكيو",
      english: "Куриные Крылья Барбекю",
    },
    category: "chicken",
    description: {
      arabic:
        "أجنحة دجاج طرية بنكهة صلصة باربيكيو، يتم تقديمها مع صلصة الرانش جانبية.",
      english:
        "Нежные куриные крылышки со вкусом барбекю, подаются с соусом Ранч.",
    },
    image: ChickenWingsBBQ,
    price: 25,
  },
  {
    name: {
      arabic: "أجنحة الدجاج بصلصة حارة",
      english: "Куриные Горячие Крылышки",
    },
    category: "chicken",
    description: {
      arabic: "أجنحة دجاج طرية بنكهة حارة، يتم تقديمها مع صلصة الرانش جانبية.",
      english:
        "Нежные куриные крылышки с острым вкусом, подаются с соусом Ранч.",
    },
    image: ChickenWingsHot,
    price: 25,
  },

  // Продукты для категории "Sides"
  {
    name: {
      arabic: "عصا الجبن المبشورة",
      english: "Сырные хлебные палочки",
    },
    category: "side",
    description: {
      arabic:
        "عصي يدوية مغطاة بالموزاريلا، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Брошенные вручную палочки, покрытые моцареллой, подаются с соусом Маринара.",
    },
    image: CheesyBreadSticks,
    price: 12,
  },
  {
    name: {
      arabic: "عصي الخبز",
      english: "Хлебные палочки",
    },
    category: "side",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومخبوزة حتى تصبح ذهبية اللون، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Палочки с маслом, запеченные вручную до золотистого цвета, подаются с соусом Маринара.",
    },
    image: BreadSticks,
    price: 10,
  },
  {
    name: {
      arabic: "عصي الجبن المحشوة بالفاهيتا",
      english: "Фаршированный сырный хлеб фахита",
    },
    category: "side",
    description: {
      arabic:
        "محشوة بالموزاريلا، صدر دجاج مشوي وفلفل حار، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Фаршированная моцареллой, куриной грудкой на гриле и халапеньо, подается с соусом Маринара.",
    },
    image: StuffedCheesy,
    price: 12,
  },
  {
    name: {
      arabic: "عصي الجبن المحشوة بالإيطاليو",
      english: "Фаршированный сырный хлеб",
    },
    category: "side",
    description: {
      arabic:
        "محشوة بالموزاريلا، بيف بيبروني، فلفل أخضر وبصل، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Фаршированные моцареллой, говяжьим пепперони, зеленым перцем и луком, подаются с соусом Маринара.",
    },
    image: StuffedCheesy,
    price: 12,
  },

  // Продукты для категории "Drinks"
  {
    name: {
      arabic: "7 أب",
      english: "7 Up",
    },
    category: "drink",
    description: {
      arabic: "",
      english: "",
    },
    image: SevenUp,
    price: 10,
  },
  {
    name: {
      arabic: "دايت بيبسي",
      english: "Диет. Pepsi",
    },
    category: "drink",
    description: {
      arabic: "",
      english: "",
    },
    image: DietPepsi,
    price: "5",
  },
  {
    name: {
      arabic: "بيبسي",
      english: "Pepsi",
    },
    category: "drink",
    description: {
      arabic: "",
      english: "",
    },
    image: Pepsi,
    price: 10,
  },
  {
    name: {
      arabic: "ميرندا برتقال",
      english: "Mirinda",
    },
    category: "drink",
    description: {
      arabic: "",
      english: "",
    },
    image: OrangeMirinda,
    price: 10,
  },
  {
    name: {
      arabic: "ماء",
      english: "Вода",
    },
    category: "drink",
    description: {
      arabic: "",
      english: "",
    },
    image: Water,
    price: 4,
  },

  // Продукты для категории "Desserts"
  {
    name: {
      arabic: "عصي القرفة",
      english: "Палочки корицы",
    },
    category: "dessert",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومزينة بالقرفة، يتم تقديمها مع صلصة الجلي الحلوة جانبيةً.",
      english:
        "Палочки с маслом, брошенные вручную, посыпанные корицей, подаются со сладким соусом из глазури.",
    },
    image: CinnamonSticks,
    price: 14,
  },
  {
    name: {
      arabic: "عصي القرفة مع الأناناس",
      english: "Палочки корицы с ананасом",
    },
    category: "dessert",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومزينة بالقرفة والأناناس، يتم تقديمها مع صلصة الجلي الحلوة جانبيةً.",
      english:
        "Палочки с маслом, брошенные вручную, сбрызнутые корицей и ананасом, подаются со сладким соусом из глазури.",
    },
    image: CinnamonSticksWithPineapple,
    price: 16,
  },
  {
    name: {
      arabic: "",
      english: "Шоколадное лавовое суфле",
    },
    category: "dessert",
    description: {
      arabic: "",
      english:
        "Запеченный шоколадный торт с расплавленной шоколадной помадкой внутри.",
    },
    image: ChocolateLavaSouffle,
    price: 12,
  },
  {
    name: {
      arabic: "",
      english: "Крауни",
    },
    category: "dessert",
    description: {
      arabic: "",
      english: "Запеченный брауни с помадкой, смешанный с печеньем из молочного шоколада.",
    },
    image: Crownies,
    price: 25,
  },

  // Продукты для категории "Extras"
  {
    name: {
      arabic: "صلصة باربيكيو",
      english: "Соус барбекю",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: BBQSauce,
    price: 3,
  },
  {
    name: {
      arabic: "صلصة بفلو حارة",
      english: "Острый соус Баффало",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: HotBuffaloSauce,
    price: 3,
  },
  {
    name: {
      arabic: "صلصة كيتشب",
      english: "Кетчуп",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: Ketchup,
    price: 3,
  },
  {
    name: {
      arabic: "صلصة المارينارا",
      english: "Соус Маринара",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: MarinaraSauce,
    price: 3,
  },
  {
    name: {
      arabic: "صلصة الرانش",
      english: "Соус Ранч",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: RanchSauce,
    price: 3,
  },
  {
    name: {
      arabic: "صلصة الجلي الحلوة",
      english: "Сладкий соус-глазурь",
    },
    category: "extra",
    description: {
      arabic: "",
      english: "",
    },
    image: SweetIcingSauce,
    price: 3,
  },
];

export default productItems;
