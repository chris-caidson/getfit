import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-scientific-advisory-board',
  templateUrl: 'scientific-advisory-board.html',
})
export class ScientificAdvisoryBoardPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string){
    this.navCtrl.push(pageName);
  }

  openPersonModal(person: string) {
    var data: any;

    switch (person) {
      case "john-anderson":
        data = {
          personName: "John W. Anderson",
          personTitle: "Isagenix Founder",
          imageSrc: "assets/imgs/advisory/john-anderson.jpg",
          details: "John Anderson has worked as a private-label supplement manufacturer and formulator for more than " +
            "600 companies, creating more than 2,300 nutritional and weight loss products. His products are internationally " +
            "recognized and respected as groundbreaking and incredibly effective.<p>For Isagenix, John took the art of " +
            "formulation to the highest level, creating revolutionary formulas that deliver staggering results. John has " +
            "always been highly motivated to find ways to increase health and decrease the problems associated with aging. " +
            "Over the last decade, he has developed the most popular Isagenix products that have formed this amazing company; " +
            "IsaLean® Shake, Cleanse for Life®, Ionix® Supreme and Product B™.</p>"
        };
        break;

      case "robert-kay":
        data = {
          personName: "Robert 'Bob' Kay, Ph.D.",
          personTitle: "Chief Science Officer",
          imageSrc: "assets/imgs/advisory/robert-kay.jpg",
          details: "Bob has more than 25 years of experience leveraging business and science to create innovative, " +
            "market-leading products. As Chief Science Officer, Bob oversees the research and development, product design " +
            "and development, product commercialization, and quality assurance of all Isagenix products. Prior to joining " +
            "our corporate team, Bob was the Chief Science Officer for his last three companies, which averaged $50 million " +
            "to $70 billion annually, devising and monetizing new products that drove hundreds of millions of dollars in " +
            "global revenue.<p>Bob holds a Bachelor of Arts in psychology, a Master of Science in nutritional science, and a " +
            "doctorate in nutritional science from the University of Connecticut. He is also a certified CGMP instructor and " +
            "former registered dietician.</p>"
        };
        break;

      case "suk-cho":
        data = {
          personName: "Suk Cho, Ph.D.",
          personTitle: "Senior Science Advisor and SAB Chair",
          imageSrc: "assets/imgs/advisory/suk-cho.jpg",
          details: "Dr. Suk Cho brings breadth of product development experience and diverse technical knowledge to our " +
            "Isagenix® Scientific Advisory Board. Since joining the company in 2010, he has directed new product concept and " +
            "development, managed international regulatory affairs, overseen all quality management processes including " +
            "structure-function claims support and label compliance, and has initiated or supported clinical trials that have " +
            "provided scientific substantiation of Isagenix products.<p>Dr. Cho received his B.S. in Biochemistry at Juniata " +
            "College, his M.S. in natural product chemistry at Miami University, and his Ph.D. in Organic Chemistry at Emory " +
            "University. He has more than 30 patents and has authored or co-authored more than a dozen articles or abstracts " +
            "in peer-reviewed scientific journals.</p>"
        };
        break;

      case "dennis-harper":
        data = {
          personName: "Dennis Harper, D.O.",
          personTitle: "",
          imageSrc: "assets/imgs/advisory/dennis-harper.jpg",
          details: "Dr. Harper has been in general medical practice for 20 years and was instrumental in getting the DSHEA " +
            "(Dietary Supplement Health and Education Act) implemented in 1994. Dr. Harper was a voting member of the American " +
            "Osteopathic Association, former President of Physicians for Progressive Medicine, former Chairman for the " +
            "Osteopathic Licensing Board for the state of Utah and was a Fellow for the Federation of State Medical Boards. " +
            "Dr. Harper is the author of “Cleansing for Life: Nature’s Best Kept Health Secret.”"
        };
        break;

      case "wayne-bidlack":
        data = {
          personName: "Wayne Bidlack, Ph.D.",
          personTitle: "",
          imageSrc: "assets/imgs/advisory/wayne-bidlack.jpg",
          details: "Dr. Wayne Bidlack is a professor in the Human Nutrition and Food Science Department at the California " +
            "State Polytechnic University in Pomona, CA. He retired with emeritus status, but continues to teach one quarter " +
            "each year. He received his bachelor’s of science degree in Dairy Science and Technology from Pennsylvania State " +
            "University, his master’s in food science from Iowa State University, and his Ph.D. in biochemistry from the " +
            "University of California, Davis. He also was a post-doctoral fellow in the department of pharmacology at the " +
            "University of Southern California School of Medicine.<p>His research interests integrate the general areas of " +
            "nutrition, biochemistry, pharmacology, and toxicology. He maintains interest in the development of value-added " +
            "food products, evaluation of biologically active food components, and in development of nutritional genomics. " +
            "From these efforts, Dr. Bidlack has published more than 55 publications, written 12 book chapters, and edited " +
            "seven books. He was also involved in successful international symposia on nutritional genomics, which resulted " +
            "in a book on the subject covering a breadth of areas and its application.</p>"
        };
        break;

      case "zhaoping-li":
        data = {
          personName: "Zhaoping Li, M.D., Ph.D.",
          personTitle: "",
          imageSrc: "assets/imgs/advisory/zhaoping-li.jpg",
          details: "Dr. Zhaoping Li received a medical degree and a Ph.D. in physiology from Peking University, School of " +
            "Medicine, in China. She completed her internship and residency in Internal Medicine at the VA Greater Los " +
            "Angeles. She also completed a fellowship in Cardiovascular Research at UCLA. Dr. Li is board certified in " +
            "Internal Medicine. She currently serves as Professor of Clinical Medicine, Clinical Chief, Associate Director, " +
            "and Associate Chief of the Department of Medicine, David Geffen School of Medicine at UCLA. She is also " +
            "Associate Director of the UCLA Risk Factor Obesity Program. Her previous appointments include Director of " +
            "Resident Clinic, Physician Champion, and Chief of Emergency Department at VA Greater Los Angeles. She has also " +
            "been a visiting professor at Beijing Capital Medical University and Guangzhou Medical University.<p>" +
            "Additionally, she has served as a reviewer to a variety of peer-reviewed journals and scholarly articles. She " +
            "has been interviewed for several media articles and has been invited to speak at a variety of educational " +
            "events. She is also the recipient of several awards including Teacher of the Year and Resident of the Year, " +
            "and Recognition in Teaching Medical Residents at UCLA. She has been awarded numerous grants, awards, and " +
            "contracts from the Department of Health Services, NIH, and Fortune 500 companies. She is also the author of " +
            "more than 55 research articles and has authored or co-authored more than five book chapters or reviews."
        };
        break;

      case "nicholas-messina":
        data = {
          personName: "Nicholas Messina, M.D.",
          personTitle: "",
          imageSrc: "assets/imgs/advisory/nicholas-messina.jpg",
          details: "Dr. Nicholas Messina became a board certified family practitioner in 1985. He has been in both solo and " +
            "group practice. He has served as the director for an integrative medical facility and went on to become the " +
            "medical director for an independent research facility. While there, he participated as the principal investigator " +
            "on numerous clinical trials sponsored by many of the Fortune 500 pharmaceutical companies. These trials involved " +
            "hypertension, osteoarthritis, hyperlipidemia, diabetes, obesity, depression, chronic pain, and anxiety, among " +
            "others.<p>He has also served as the vice-chairman of an Institutional Review Board, overseeing scientific design " +
            "and human subject safety in proposed pharmaceutical research. He is the author of several publications in " +
            "scientific journals. Currently Dr. Messina does independent consulting for the pharmaceutical and healthcare " +
            "industries. Originally skeptical of using Isagenix products, he decided to try them in April 2009 after one of " +
            "his patients lost considerable weight. He now uses Isagenix products to maintain a healthy weight and recommends " +
            "that other health professionals use them in their practice."
        };
        break;

      case "michael-colgan":
        data = {
          personName: "Michael Colgan, Ph.D., CCN",
          personTitle: "",
          imageSrc: "assets/imgs/advisory/michael-colgan.jpg",
          details: "Dr. Colgan is an internationally renowned research scientist acknowledged as one of the world’s scientific " +
            "experts on the inhibition of aging. Dr. Colgan has written more than fifty research papers, authored more than " +
            "700 articles and written 16 books, including two bestsellers. His first book, Your Personal Vitamin Profile, " +
            "rapidly became a definitive guide for accurate, scientifically researched nutritional information and has been " +
            "in continuous print for the last 28 years.<p>From 1979 to 1998, Dr. Colgan served as Director of the Colgan " +
            "Institute, a consulting, educational and research facility concerned with the effects of nutrition and exercise " +
            "on athletic performance as well as prevention of chronic degenerative disease, especially degeneration of the " +
            "brain. His professional memberships include the New York Academy of Sciences, the American Academy of Anti-Aging " +
            "Medicine, the American College of Sports Medicine, and the British Society for Nutritional Medicine. In 2002, Dr. " +
            "Colgan was inducted into the Canadian Nutrition Hall of Fame."
        };
        break;
    }

    const myModal = this.modalCtrl.create("PersonModalPage", data);
    myModal.present();
  }
}
