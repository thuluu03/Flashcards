import borzoi from "./images/borzoi.webp";
import spaniel from "./images/cocker.jpg";
import doberman from "./images/doberman.jpg";
import frenchie from "./images/frenchie.jpg";
import hotdog from "./images/hot-dog.webp";
import pug from "./images/pug.avif";
import rottie from "./images/rotties.webp";
import shih from "./images/shih-poo.webp";

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
        "answer": "shih-pooh (shih tzu poodle)",
        "img": "${shih}",
        "description": "As cross-breeds, shih poos are not an officially recognized breed, and there is no breed standard regarding appearance or temperament.",
        "link": "https://www.hillspet.com/dog-care/dog-breeds/shih-poo#:~:text=What%20shih%20poos%20may%20lack,for%20long%20periods%20of%20time.",
        "source": "Hills Pet",
        "difficulty": "red"
    }
]`;

export default cards;
