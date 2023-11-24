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
      english: "Paneer Tikka Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "بينير تكا طازج مع فلفل أحمر وأخضر وبصل وموزاريلا وصلصة مارينارا الخاصة مع صلصة النعناع.",
      english:
        "Fresh Paneer Tikka with red & green pepper, Onion, mozzarella and signature Marinara sauce topped with Mint sauce.",
    },
    image: PaneerTikkaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا الجبن الأربعة",
      english: "Four Cheese Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، جبن أمريكي، طبقتين من الموزاريلا، جبنة فيتا وزعتر",
      english:
        "Pizza Sauce, American Cheese, 2 Layers of Mozzarella, Feta Cheese & Oregano",
    },
    image: FourCheesePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },

  {
    name: {
      arabic: "بيتزا الفلفل الأحمر والرانش",
      english: "Veggie Legend Jalapenos & Ranch Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "بصل، فلفل أحمر، زيتون أسود، جالابينو، موزاريلا، جبن أمريكي مع صلصة الرانش (تحتوي صلصة الرانش على البيض).",
      english:
        "Onions, red pepper, black olives, jalapenos, mozzarella, American cheese with ranch sauce (Ranch sauce contains egg).",
    },
    image: VeggieLegendJalapenos,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا تكا الدجاج",
      english: "Chicken Tikka Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، دجاج تكا، بصل، فلفل أخضر مع صلصة النعناع.",
      english:
        "Pizza Sauce, Mozzarella, Chicken Tikka, Onions, Green Peppers with Mint Sauce",
    },
    image: ChickenTikkaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا شيز ستيك فيلادلفيا",
      english: "Philly Cheese Steak Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "جبن أمريكي، شرائح لحم بقري، فلفل أخضر، بصل، فطر وموزاريلا.",
      english:
        "American Cheese, Slices of Beef Steak, Green Peppers, Onions, Mushrooms & Mozzarella",
    },
    image: PhillyCheeseSteakPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا فيلادلفيا الديناميت",
      english: "Philly Cheese Steak Dynamite Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "جبن أمريكي، شرائح لحم بقري، فلفل أخضر، بصل، فطر وموزاريلا مع صلصة الديناميت.",
      english:
        "American Cheese, Slices of Beef Steak, Green Peppers, Onions, Mushrooms, Mozzarella with Dynamite Sauce",
    },
    image: PhillyCheeseSteakDynamitePizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا إكسترافاغانزا",
      english: "Extravaganzza Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بصل، فلفل أخضر، فطر، زيتون أسود، بقر، نقانق إيطالية وطبقة إضافية من الموزاريلا.",
      english:
        "Pizza Sauce, Mozzarella, Beef Pepperoni, Onions, Green Peppers, Mushrooms, Black Olives, Beef, Italian Sausage & Extra layer of Mozzarella",
    },
    image: ExtravaganzzaPizza,
    prices: {
      20: 37,
      28: 47,
      33: 57,
    },
  },
  {
    name: {
      arabic: "بيتزا الدجاج الديناميت",
      english: "Chicken Dynamite Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "جبن أمريكي، فلفل أخضر، بصل، صدر دجاج مقرمش، موزاريلا، زعتر مع صلصة الديناميت.",
      english:
        "American Cheese, Green Peppers, Onions, Crunchy Chicken Breast, Mozzarella, Oregano with Dynamite Sauce",
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
      english: "Chicken Hot Dynamite Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "جبن أمريكي، فلفل أخضر، بصل، صدر دجاج مقرمش، موزاريلا، زعتر مع صلصة الديناميت وصلصة بفلو باردة.",
      english:
        "American Cheese, Green Peppers, Onions, Crunchy Chicken Breast, Mozzarella, Oregano with Dynamite & Hot Buffalo Sauces",
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
      english: "Legend Chicken Ranch & Jalapeno Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Jalapeno, Oregano & Ranch Sauce",
      english:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Jalapeno, Oregano & Ranch Sauce",
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
      english: "Chicken Feast Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "محملة بمزيج لذيذ من الدجاج المشوي والأشهر مع الدجاج الرائع وتوابلها بالجالابينو وشرائح الفلفل الأحمر.",
      english:
        "Loaded with a delicious combination of grilled chicken, famous chicken kickers and premium Chicken, spicing it up with jalapeno and red pepper slices.",
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
      english: "Alfredo Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة ألفريدو الأصلية، قطع صدر دجاج مشوي، جبن موزاريلا، شرائح فطر طازجة.",
      english:
        "Original Alfredo Sauce, Grilled Chicken Breast Pieces, Mozzarella Cheese, Slices of Fresh Mushroom",
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
      english: "Margherita Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا وجبنة الموزاريلا.",
      english: "Pizza Sauce & Mozzarella",
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
      english: "Veggie Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، فطر وزيتون أسود.",
      english:
        "Pizza Sauce, Mozzarella, Onions, Green Peppers, Mushrooms & Black Olives",
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
      english: "Mexican Green Wave Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "بيتزا محشوة بالبصل المقرمش، فلفل الكابسيكوم اللذيذ والجالابينو مع الأعشاب المكسيكية.",
      english:
        "A pizza loaded with Crunchy Onions, Crisp Capsicum and Jalapeno with Mexican Herb.",
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
      english: "Pepperoni Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، موزاريلا وبيف بيبروني.",
      english: "Pizza Sauce, Mozzarella & Beef Pepperoni",
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
      english: "Legend Chicken Ranch Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة الرانش.",
      english:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Oregano with Ranch Sauce",
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
      english: "Legend Chicken BBQ Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة الباربيكيو.",
      english:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Oregano with BBQ Sauce",
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
      english: "Hawaiian Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، موزاريلا وبيف بيبروني وأناناس هاواي.",
      english: "Pizza Sauce, Mozzarella, Beef Pepperoni & Hawaiian Pineapple",
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
      english: "Chicken Memphis BBQ Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة الباربيكيو، موزاريلا، صدر دجاج مشوي وبصل.",
      english: "BBQ Sauce, Mozzarella, Grilled Chicken Breast & Onions",
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
      english: "Meatzza Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بقر، نقانق إيطالية وطبقة إضافية من الموزاريلا.",
      english:
        "Pizza Sauce, Mozzarella, Beef Pepperoni, Beef, Italiano Sausage & Extra layer of Mozzarella",
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
      english: "Tex Mex Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، زيتون أسود، صدر دجاج مشوي، جالابينو وزعتر.",
      english:
        "Pizza Sauce, Mozzarella, Onions, Green Peppers, Black Olives, Grilled Chicken Breast, Jalapeno & Oregano",
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
      english: "Italiano Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بيف بيبروني، فطر ونقانق إيطالية.",
      english:
        "Pizza Sauce, Mozzarella, Beef Pepperoni, Mushrooms & Italian Sausage",
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
      english: "Hot & Spicy Pizza",
    },
    category: "Pizzas",
    description: {
      arabic: "صلصة البيتزا، موزاريلا، بصل، فلفل أخضر، جالابينو وبيف.",
      english:
        "Pizza Sauce, Mozzarella, Onions, Green Peppers, Jalapeno & Beef",
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
      english: "Deluxe Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "صلصة البيتزا، موزاريلا، بيف بيبروني، بصل، فلفف أخضر، فطر ونقانق إيطالية.",
      english:
        "Pizza Sauce, Mozzarella, Beef Pepperoni, Onions, Green Peppers, Mushrooms & Italian Sausage",
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
      english: "Legend Chicken Hot Pizza",
    },
    category: "Pizzas",
    description: {
      arabic:
        "جبن أمريكي، صدر دجاج مشوي، بصل، موزاريلا، زعتر مع صلصة البفلو الحارة.",
      english:
        "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Oregano with Hot Buffalo Sauce",
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
      english: "Chicken Kickers",
    },
    category: "Chicken",
    description: {
      arabic:
        "صدور دجاج مقرمشة مع نكهة صلصة بفلو باربيكيو حارة، يتم تقديمها مع صلصة الرانش وصلصة بفلو باربيكيو جانبية.",
      english:
        "Crunchy Chicken Breast with a Hint of Hot Buffalo Sauce Flavor, Served with Ranch & Hot Buffalo Sauces on the side.",
    },
    image: ChickenKickers,
    price: 25,
  },
  {
    name: {
      arabic: "أجنحة الدجاج بصلصة باربيكيو",
      english: "Chicken Wings BBQ Wings",
    },
    category: "Chicken",
    description: {
      arabic:
        "أجنحة دجاج طرية بنكهة صلصة باربيكيو، يتم تقديمها مع صلصة الرانش جانبية.",
      english:
        "Tender Chicken Wings in BBQ Flavor, Served with Ranch Sauce on the side.",
    },
    image: ChickenWingsBBQ,
    price: 25,
  },
  {
    name: {
      arabic: "أجنحة الدجاج بصلصة حارة",
      english: "Chicken Wings Hot Wings",
    },
    category: "Chicken",
    description: {
      arabic: "أجنحة دجاج طرية بنكهة حارة، يتم تقديمها مع صلصة الرانش جانبية.",
      english:
        "Tender Chicken Wings in Hot Flavor, Served with Ranch Sauce on the side.",
    },
    image: ChickenWingsHot,
    price: 25,
  },

  // Продукты для категории "Sides"
  {
    name: {
      arabic: "عصا الجبن المبشورة",
      english: "Cheesy Bread Sticks",
    },
    category: "Sides",
    description: {
      arabic:
        "عصي يدوية مغطاة بالموزاريلا، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Hand Tossed Sticks Covered with Mozzarella, Served with Marinara Sauce on the side.",
    },
    image: CheesyBreadSticks,
    price: 12,
  },
  {
    name: {
      arabic: "عصي الخبز",
      english: "Bread Sticks",
    },
    category: "Sides",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومخبوزة حتى تصبح ذهبية اللون، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Buttery Hand Tossed Sticks Baked to a Golden Brown, Served with Marinara Sauce on the side.",
    },
    image: BreadSticks,
    price: 10,
  },
  {
    name: {
      arabic: "عصي الجبن المحشوة بالفاهيتا",
      english: "Stuffed Cheesy Bread Fajita Bread",
    },
    category: "Sides",
    description: {
      arabic:
        "محشوة بالموزاريلا، صدر دجاج مشوي وفلفل حار، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Stuffed with Mozzarella, Grilled Chicken Breast & Jalapeno, Served with Marinara Sauce on the side.",
    },
    image: StuffedCheesy,
    price: 12,
  },
  {
    name: {
      arabic: "عصي الجبن المحشوة بالإيطاليو",
      english: "Stuffed Cheesy Bread Italiano Bread",
    },
    category: "Sides",
    description: {
      arabic:
        "محشوة بالموزاريلا، بيف بيبروني، فلفل أخضر وبصل، يتم تقديمها مع صلصة المارينارا جانبيةً.",
      english:
        "Stuffed with Mozzarella, Beef Pepperoni, Green Peppers & Onions, Served with Marinara Sauce on the side.",
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
    category: "Drinks",
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
      english: "Diet Pepsi",
    },
    category: "Drinks",
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
    category: "Drinks",
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
      english: "Orange Mirinda",
    },
    category: "Drinks",
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
      english: "Water",
    },
    category: "Drinks",
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
      english: "Cinnamon Sticks",
    },
    category: "Desserts",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومزينة بالقرفة، يتم تقديمها مع صلصة الجلي الحلوة جانبيةً.",
      english:
        "Buttery Hand Tossed Sticks Drizzled with Cinnamon, Served with Sweet Icing Sauce on the side.",
    },
    image: CinnamonSticks,
    price: 14,
  },
  {
    name: {
      arabic: "عصي القرفة مع الأناناس",
      english: "Cinnamon Sticks with Pineapple",
    },
    category: "Desserts",
    description: {
      arabic:
        "عصي يدوية مدهونة بالزبدة ومزينة بالقرفة والأناناس، يتم تقديمها مع صلصة الجلي الحلوة جانبيةً.",
      english:
        "Buttery Hand Tossed Sticks Drizzled with Cinnamon & Pineapple, Served with Sweet Icing Sauce on the side.",
    },
    image: CinnamonSticksWithPineapple,
    price: 16,
  },
  {
    name: {
      arabic: "",
      english: "Chocolate Lava Souffle",
    },
    category: "Desserts",
    description: {
      arabic: "",
      english:
        "Baked Chocolate Cake with Molten Chocolate Fudge on the Inside.",
    },
    image: ChocolateLavaSouffle,
    price: 12,
  },
  {
    name: {
      arabic: "",
      english: "Crownies",
    },
    category: "Desserts",
    description: {
      arabic: "",
      english: "Baked Fudge Brownie Mixed with Milk Chocolate Cookies.",
    },
    image: Crownies,
    price: 25,
  },

  // Продукты для категории "Extras"
  {
    name: {
      arabic: "صلصة باربيكيو",
      english: "BBQ Sauce",
    },
    category: "Extras",
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
      english: "Hot Buffalo Sauce",
    },
    category: "Extras",
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
      english: "Ketchup",
    },
    category: "Extras",
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
      english: "Marinara Sauce",
    },
    category: "Extras",
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
      english: "Ranch Sauce",
    },
    category: "Extras",
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
      english: "Sweet Icing Sauce",
    },
    category: "Extras",
    description: {
      arabic: "",
      english: "",
    },
    image: SweetIcingSauce,
    price: 3,
  },
];

export default productItems;
