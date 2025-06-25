import borzoi from "./images/borzoi.webp";
import spaniel from "./images/cocker.jpg";
import doberman from "./images/doberman.jpg";
import frenchie from "./images/frenchie.jpg";
import hotdog from "./images/hot-dog.webp";
import pug from "./images/pug.avif";
import rottie from "./images/rotties.webp";
import shih from "./images/shih-poo.webp";
import shepherd from "./images/shepherd.webp";
import beagle from "./images/beagle.jpg";
import afghan from "./images/afghan.webp";
import bichon from "./images/bichon.webp";
import chihuahua from "./images/chihuahua.webp";
import husky from "./images/husky.jpeg";
import maltese from "./images/maltese.webp";
import poodle from "./images/poodle.jpg";
import basset from "./images/basset.jpg";
import bedlington from "./images/bedlington.webp";
import chow from "./images/chow.jpg";
import pom from "./images/pom.jpg";
import shetland from "./images/shetland.webp";
import shiba from "./images/shiba.webp";

const cards = `[
    {
        "answer": "labrador",
        "img": "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg",
        "description": "The sweet-faced, lovable Labrador Retriever is one of America's most popular dog breeds, year after year.",
        "link": "https://www.akc.org/dog-breeds/labrador-retriever/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "golden retriever",
        "img": "https://media.istockphoto.com/id/1482199939/photo/happy-sitting-and-panting-golden-retriever-dog-looking-at-camera-isolated-on-white.jpg?s=612x612&w=0&k=20&c=GkpS5ccG3eE-_PokSTwxiWU8-hAhgafVVUqDBqNi5Ag=",
        "description": "The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds.",
        "link": "https://www.akc.org/dog-breeds/golden-retriever/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "borzoi",
        "img": "${borzoi}",
        "description": "Among the most impressively beautiful of all dogs, the aristocratic Borzoi is cherished for his calm, agreeable temperament.",
        "link": "https://www.akc.org/dog-breeds/borzoi/",
        "source": "American Kennel Club",
        "difficulty": "red"
    },
    {
        "answer": "cocker spaniel",
        "img": "${spaniel}",
        "description": "The merry and frolicsome Cocker Spaniel, with his big, dreamy eyes and impish personality, is one of the world's best-loved breeds.",
        "link": "https://www.akc.org/dog-breeds/cocker-spaniel/",
        "source": "American Kennel Club",
        "difficulty": "red"
    },
    {
        "answer": "doberman",
        "img": "${doberman}",
        "description": "Sleek and powerful, possessing both a magnificent physique and keen intelligence, the Doberman Pinscher is one of dogkind's noblemen.",
        "link": "https://www.akc.org/dog-breeds/doberman-pinscher/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "french bulldog",
        "img": "${frenchie}",
        "description": "The one-of-a-kind French Bulldog, with his large bat ears and even disposition, is one of the world's most popular small-dog breeds.",
        "link": "https://www.akc.org/dog-breeds/french-bulldog/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "dachshund",
        "img": "${hotdog}",
        "description": "The famously long, low silhouette, ever-alert expression, and bold, vivacious personality of the Dachshund have made him a superstar of the canine kingdom.",
        "link": "https://www.akc.org/dog-breeds/dachshund/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "pug",
        "img": "${pug}",
        "description": "Once the mischievous companion of Chinese emperors, and later the mascot of Holland's royal House of Orange, the small but solid Pug is today adored by his millions of fans around the world.",
        "link": "https://www.akc.org/dog-breeds/pug/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "rottweiler",
        "img": "${rottie}",
        "description": "The Rottweiler is a robust working breed of great strength descended from the mastiffs of the Roman legions.",
        "link": "https://www.akc.org/dog-breeds/rottweiler/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "shih-pooh",
        "img": "${shih}",
        "description": "Also known as shih tzu poodles, shih poos are not an officially recognized breed, and there is no breed standard regarding appearance or temperament.",
        "link": "https://www.hillspet.com/dog-care/dog-breeds/shih-poo#:~:text=What%20shih%20poos%20may%20lack,for%20long%20periods%20of%20time.",
        "source": "Hills Pet",
        "difficulty": "red"
    },
    {
        "answer": "german shepherd",
        "img": "${shepherd}",
        "description": "Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence.",
        "link": "https://www.akc.org/dog-breeds/german-shepherd-dog/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "beagle",
        "img": "${beagle}",
        "description": "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'thanks to its pleading expression'cute.",
        "link": "https://www.akc.org/dog-breeds/beagle/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "afghan hound",
        "img": "${afghan}",
        "description": "Among the most eye-catching of all dog breeds, the Afghan Hound is an aloof and dignified aristocrat of sublime beauty.",
        "link": "https://www.akc.org/dog-breeds/afghan-hound/",
        "source": "American Kennel Club",
        "difficulty": "red"
    },
    {
        "answer": "bichon frise",
        "img": "${bichon}",
        "description": "Since antiquity, these irresistible canine comedians have relied on charm, beauty, and intelligence to weather history's ups and downs.",
        "link": "https://www.akc.org/dog-breeds/bichon-frise/",
        "source": "American Kennel Club",
        "difficulty": "red"
    },
    {
        "answer": "siberian husky",
        "img": "${husky}",
        "description": "Siberian Husky, a thickly coated, compact sled dog of medium size and great endurance, was developed to work in packs, pulling light loads at moderate speeds over vast frozen expanses.",
        "link": "https://www.akc.org/dog-breeds/siberian-husky/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "maltese",
        "img": "${maltese}",
        "description": "Famous for their show-stopping, floor-length coat, Maltese are playful, charming, and adaptable toy companions.",
        "link": "https://www.akc.org/dog-breeds/maltese/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "chihuahua",
        "img": "${chihuahua}",
        "description": " A national symbol of Mexico, these alert and amusing \”purse dogs\” stand among the oldest breeds of the Americas, with a lineage going back to the ancient kingdoms of pre-Columbian times.",
        "link": "https://www.akc.org/dog-breeds/chihuahua/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "poodle",
        "img": "${poodle}",
        "description": "Whether Standard, Miniature, or Toy, and either black, white, or apricot, the Poodle stands proudly among dogdom's true aristocrats.",
        "link": "https://www.akc.org/dog-breeds/poodle-standard/",
        "source": "American Kennel Club",
        "difficulty": "green"
    },
    {
        "answer": "basset hound",
        "img": "${basset}",
        "description": "Among the most appealing of the AKC breeds, the endearing and instantly recognizable Basset Hound is a perennial favorite of dog lovers all over the world.",
        "link": "https://www.akc.org/dog-breeds/basset-hound/",
        "source": "American Kennel Club",
        "difficulty": "yellow"
    },
    {
        "answer": "bedlington terrier",
        "img": "${bedlington}",
        "description": "Graceful terriers in sheep's clothing, Bedlington Terriers, named for the English mining shire where they were first bred, are genial housemates, alert watchdogs, versatile athletes, and irresistibly cuddly TV-time companions.",
        "link": "https://www.akc.org/dog-breeds/bedlington-terrier/",
        "source": "American Kennel Club",
        "difficulty": "red"
    }
]`;

export default cards;
