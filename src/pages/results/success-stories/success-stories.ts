import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-success-stories',
  templateUrl: 'success-stories.html',
})
export class SuccessStoriesPage {
  year: number = 2015;

  people: any = [
    // 2015
    { year: 2015, imgId: "001", name: "Abilio V." },
    { year: 2015, imgId: "002", name: "Amy O." },
    { year: 2015, imgId: "003", name: "Angela F." },
    { year: 2015, imgId: "004", name: "Billy A." },
    { year: 2015, imgId: "005", name: "Caylen W." },
    { year: 2015, imgId: "006", name: "Ellen C." },
    { year: 2015, imgId: "007", name: "James B." },
    { year: 2015, imgId: "008", name: "Jesse J." },
    { year: 2015, imgId: "009", name: "John M." },
    { year: 2015, imgId: "010", name: "Kathy P." },
    { year: 2015, imgId: "011", name: "Kelli E." },
    { year: 2015, imgId: "012", name: "Michael L." },
    { year: 2015, imgId: "013", name: "Natalie H." },
    { year: 2015, imgId: "014", name: "Nicole S." },
    { year: 2015, imgId: "015", name: "Ryan E." },
    // 2014
    { year: 2014, imgId: "016", name: "Abby G." },
    { year: 2014, imgId: "017", name: "Amyra M." },
    { year: 2014, imgId: "018", name: "Angie R." },
    { year: 2014, imgId: "019", name: "Ben M." },
    { year: 2014, imgId: "020", name: "Bob S." },
    { year: 2014, imgId: "021", name: "David J." },
    { year: 2014, imgId: "022", name: "Elizabeth B." },
    { year: 2014, imgId: "023", name: "Erin P." },
    { year: 2014, imgId: "024", name: "Jason O." },
    { year: 2014, imgId: "025", name: "Jennifer R." },
    { year: 2014, imgId: "026", name: "Judy L." },
    { year: 2014, imgId: "027", name: "Randy F." },
    { year: 2014, imgId: "028", name: "Shelagh R." },
    { year: 2014, imgId: "029", name: "Thai L." },
    { year: 2014, imgId: "030", name: "Will A." },
    // 2013
    { year: 2013, imgId: "031", name: "Aaron H."},
    { year: 2013, imgId: "032", name: "Angie T."},
    { year: 2013, imgId: "033", name: "Belinda S."},
    { year: 2013, imgId: "034", name: "Brandon C."},
    { year: 2013, imgId: "035", name: "Carol G."},
    { year: 2013, imgId: "036", name: "Carolyne R."},
    { year: 2013, imgId: "037", name: "Chris B."},
    { year: 2013, imgId: "038", name: "Dr. David N."},
    { year: 2013, imgId: "039", name: "Emily S."},
    { year: 2013, imgId: "040", name: "Giovanni R."},
    { year: 2013, imgId: "041", name: "Glen O."},
    { year: 2013, imgId: "042", name: "Jennifer-Anne S."},
    { year: 2013, imgId: "043", name: "Joe M."},
    { year: 2013, imgId: "044", name: "Kelly Ann Z."},
    { year: 2013, imgId: "045", name: "Mike T."},
    { year: 2013, imgId: "046", name: "Nils M."},
    { year: 2013, imgId: "047", name: "Dr. Paul B."},
    { year: 2013, imgId: "048", name: "Richard B."},
    { year: 2013, imgId: "049", name: "Richard R."},
    { year: 2013, imgId: "050", name: "Shannon K."},
    // 2012
    { year: 2012, imgId: "051", name: "Angela R."},
    { year: 2012, imgId: "052", name: "Craig C."},
    { year: 2012, imgId: "053", name: "Dr. Victoria T."},
    { year: 2012, imgId: "054", name: "Elizabeth M."},
    { year: 2012, imgId: "055", name: "Frank P."},
    { year: 2012, imgId: "056", name: "Leanne K."},
    { year: 2012, imgId: "057", name: "Lois L."},
    { year: 2012, imgId: "058", name: "Miriam B."},
    { year: 2012, imgId: "059", name: "Patricia H."},
    { year: 2012, imgId: "060", name: "Rebekah H."},
    { year: 2012, imgId: "061", name: "Tiff D."},
    // 2011
    { year: 2011, imgId: "062", name: "Annie S."},
    { year: 2011, imgId: "063", name: "Anthony S."},
    { year: 2011, imgId: "064", name: "Gary S."},
    { year: 2011, imgId: "065", name: "Jake F."},
    { year: 2011, imgId: "066", name: "Jessica P."},
    { year: 2011, imgId: "067", name: "Jill B."},
    { year: 2011, imgId: "068", name: "Joseph P."},
    { year: 2011, imgId: "069", name: "Lisa W."},
    { year: 2011, imgId: "070", name: "Liz M."},
    { year: 2011, imgId: "071", name: "Marina B."},
    { year: 2011, imgId: "072", name: "Nathan F."},
    { year: 2011, imgId: "073", name: "Pamela M. & Kyle S."},
    { year: 2011, imgId: "074", name: "Rhonda O."},
    { year: 2011, imgId: "075", name: "Rick K."},
    { year: 2011, imgId: "076", name: "Todd W."},
    // 2010
    { year: 2010, imgId: "077", name: "Brian R."},
    { year: 2010, imgId: "078", name: "Eric F."},
    { year: 2010, imgId: "079", name: "Geri N."},
    { year: 2010, imgId: "080", name: "Greg & Loriann W."},
    { year: 2010, imgId: "081", name: "Harley D."},
    { year: 2010, imgId: "082", name: "Holly D."},
    { year: 2010, imgId: "083", name: "James P."},
    { year: 2010, imgId: "084", name: "Jean F."},
    { year: 2010, imgId: "085", name: "Mary A."},
    { year: 2010, imgId: "086", name: "Melanie S."},
    { year: 2010, imgId: "087", name: "Mercedes R."},
    { year: 2010, imgId: "088", name: "Michael O."},
    { year: 2010, imgId: "089", name: "Michael W."},
    { year: 2010, imgId: "090", name: "Oralia A."},
    { year: 2010, imgId: "091", name: "Patrick D."},
    // 2009
    { year: 2009, imgId: "092", name: "April W."},
    { year: 2009, imgId: "093", name: "Bill & Keller B."},
    { year: 2009, imgId: "094", name: "Christina K."},
    { year: 2009, imgId: "095", name: "Donovan M."},
    { year: 2009, imgId: "096", name: "Dr. Ken S."},
    { year: 2009, imgId: "097", name: "Dr. Todd G."},
    { year: 2009, imgId: "098", name: "Jana B."},
    { year: 2009, imgId: "099", name: "Jason V."},
    { year: 2009, imgId: "100", name: "Jeff M."},
    { year: 2009, imgId: "101", name: "Leslie H."},
    { year: 2009, imgId: "102", name: "Mark D."},
    { year: 2009, imgId: "103", name: "Melisa S."},
    { year: 2009, imgId: "104", name: "Mike H."},
    { year: 2009, imgId: "105", name: "Robyn C."},
    { year: 2009, imgId: "106", name: "Sharon B."},
    { year: 2009, imgId: "107", name: "Ryan R."},
    // 2008
    { year: 2008, imgId: "108", name: "Anthony D."},
    { year: 2008, imgId: "109", name: "Bruce & Theresa C."},
    { year: 2008, imgId: "110", name: "Ciera W."},
    { year: 2008, imgId: "111", name: "Derrek S."},
    { year: 2008, imgId: "112", name: "Elaine G."},
    { year: 2008, imgId: "113", name: "Gary M."},
    { year: 2008, imgId: "114", name: "Jess B."},
    { year: 2008, imgId: "115", name: "Joe B."},
    { year: 2008, imgId: "116", name: "Linda O."},
    { year: 2008, imgId: "117", name: "Lyndsay & Cory S."},
    { year: 2008, imgId: "118", name: "Mary P."},
    { year: 2008, imgId: "119", name: "Matt C."},
    { year: 2008, imgId: "120", name: "Michelle P."},
    { year: 2008, imgId: "121", name: "Mike W."},
    { year: 2008, imgId: "122", name: "Radha B."},
    // 2007
    { year: 2007, imgId: "123", name: "Adam V."},
    { year: 2007, imgId: "124", name: "Daniel M."},
    { year: 2007, imgId: "125", name: "David G."},
    { year: 2007, imgId: "126", name: "David W."},
    { year: 2007, imgId: "127", name: "Derek Z."},
    { year: 2007, imgId: "128", name: "Dina M."},
    { year: 2007, imgId: "129", name: "Donna O."},
    { year: 2007, imgId: "130", name: "Eric & Amber H."}
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {

  }

  showStory(person: any) {
    let formattedName = person.name.toLowerCase().replace("&", "and").replace(/\./g, "").replace(/\s+/g, "-");
    this.navCtrl.push("SuccessStoryPage", { name: formattedName} );
  }
}
