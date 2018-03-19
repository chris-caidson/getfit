import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { Person_2007Provider } from '../../../../providers/person-2007/person-2007';
import { Person_2008Provider } from '../../../../providers/person-2008/person-2008';
import { Person_2009Provider } from '../../../../providers/person-2009/person-2009';
import { Person_2010Provider } from '../../../../providers/person-2010/person-2010';
import { Person_2011Provider } from '../../../../providers/person-2011/person-2011';
import { Person_2012Provider } from '../../../../providers/person-2012/person-2012';
import { Person_2013Provider } from '../../../../providers/person-2013/person-2013';
import { Person_2014Provider } from '../../../../providers/person-2014/person-2014';
import { Person_2015Provider } from '../../../../providers/person-2015/person-2015';

@IonicPage({
  defaultHistory: ['SuccessStoriesPage'],
  segment: 'success-story/:name'
})
@Component({
  selector: 'page-success-story',
  templateUrl: 'success-story.html',
})
export class SuccessStoryPage {
  person: any;

  people: any = [
    // 2015
    { year: 2015, id: "abilio-v", imgId: "001", name: "Abilio V.", hasVideo: true, stats: [{ key: "Location", value: "Aurora, Colorado" }, { key: "Age", value: "63" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "220 lbs." }, { key: "Lost", value: "32 lbs.*" }] },
    { year: 2015, id: "amy-o", imgId: "002", name: "Amy O.", hasVideo: true, stats: [{ key: "Location", value: "Eyota, Minnesota" }, { key: "Age", value: "31" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "166 lbs." }, { key: "Lost", value: "41 lbs.*" }] },
    { year: 2015, id: "angela-f", imgId: "003", name: "Angela F.", hasVideo: true, stats: [{ key: "Location", value: "Summerville, South Carolina" }, { key: "Age", value: "53" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "185 lbs." }, { key: "Lost", value: "0 lbs. (45 lbs. total)*" }, { key: "Challenges Completed", value: "4" }] },
    { year: 2015, id: "billy-a", imgId: "004", name: "Billy A.", hasVideo: true, stats: [{ key: "Location", value: "Phoenix, Arizona" }, { key: "Age", value: "55" }, { key: "Height", value: "5'9''" }, { key: "Was", value: "195 lbs." }, { key: "Lost", value: "37 lbs. (50 lbs total)*" }, { key: "Challenges Completed", value: "1" }] },
    { year: 2015, id: "caylen-w", imgId: "005", name: "Caylen W.", hasVideo: true, stats: [{ key: "Location", value: "Lyalta, Alberta" }, { key: "Age", value: "23" }, { key: "Height", value: "6'2''" }, { key: "Was", value: "227 lbs." }, { key: "Lost", value: "28 lbs.*" }] },
    { year: 2015, id: "ellen-c", imgId: "006", name: "Ellen C.", hasVideo: true, stats: [{ key: "Location", value: "Naperville, Illinois" }, { key: "Age", value: "40" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "296 lbs." }, { key: "Lost", value: "35 lbs. (136 lbs. total)*" }, { key: "Challenges Completed", value: "2" }] },
    { year: 2015, id: "james-b", imgId: "007", name: "James B.", hasVideo: true, stats: [{ key: "Location", value: "New Lowell, Ontario" }, { key: "Age", value: "40" }, { key: "Height", value: "5'0''" }, { key: "Was", value: "175 lbs." }, { key: "Lost", value: "16 lbs.*" }] },
    { year: 2015, id: "jesse-j", imgId: "008", name: "Jesse J.", hasVideo: true, stats: [{ key: "Location", value: "Lolo, Montana" }, { key: "Age", value: "33" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "208 lbs." }, { key: "Lost", value: "3 lbs. (29 lbs. total)*" }, { key: "Challenges Completed", value: "2" }] },
    { year: 2015, id: "john-m", imgId: "009", name: "John M.", hasVideo: true, stats: [{ key: "Location", value: "Worcester, Massachusetts" }, { key: "Age", value: "60" }, { key: "Height", value: "5'9''" }, { key: "Was", value: "198 lbs." }, { key: "Lost", value: "13 lbs. (29 lbs. total)*" }, { key: "Challenges Completed", value: "4" }] },
    { year: 2015, id: "kathy-p", imgId: "010", name: "Kathy P.", hasVideo: true, stats: [{ key: "Location", value: "Kapaa, Hawaii" }, { key: "Age", value: "52" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "114 lbs." }, { key: "Lost", value: "3 lbs. (39 lbs. total)*" }] },
    { year: 2015, id: "kelli-e", imgId: "011", name: "Kelli E.", hasVideo: true, stats: [{ key: "Location", value: "Roberts, Wisconsin" }, { key: "Age", value: "29" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "144 lbs." }, { key: "Lost", value: "13 lbs.*" }, { key: "Challenges Completed", value: "1" }] },
    { year: 2015, id: "michael-l", imgId: "012", name: "Michael L.", hasVideo: true, stats: [{ key: "Location", value: "Northbrook, Illinois" }, { key: "Age", value: "52" }, { key: "Height", value: "5'7''" }, { key: "Was", value: "173 lbs." }, { key: "Lost", value: "21 lbs. (51 lbs. total)*" }, { key: "Challenges Completed", value: "1" }] },
    { year: 2015, id: "natalie-h", imgId: "013", name: "Natalie H.", hasVideo: true, stats: [{ key: "Location", value: "Scottsdale, Arizona" }, { key: "Age", value: "31" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "184 lbs." }, { key: "Lost", value: "13 lbs. (46 lbs. total)*" }, { key: "Challenges Completed", value: "2" }] },
    { year: 2015, id: "nicole-s", imgId: "014", name: "Nicole S.", hasVideo: true, stats: [{ key: "Location", value: "Kennesaw, Georgia" }, { key: "Age", value: "28" }, { key: "Height", value: "4'11''" }, { key: "Was", value: "124 lbs." }, { key: "Lost", value: "15 lbs.*" }, { key: "Challenges Completed", value: "1" }] },
    { year: 2015, id: "ryan-e", imgId: "015", name: "Ryan E.", hasVideo: true, stats: [{ key: "Location", value: "Calgary, Alberta" }, { key: "Age", value: "36" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "158 lbs." }, { key: "Gained", value: "2 lbs. (Fat loss: 3 lbs., Muscle gain: 5 lbs.)*" }] },
    // 2014
    { year: 2014, id: "abby-g", imgId: "016", name: "Abby G.", hasVideo: true, stats: [{ key: "Location", value: "Scottsdale, Arizona" }, { key: "Age", value: "26" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "146 lbs." }, { key: "Lost", value: "22 lbs.*" }] },
    { year: 2014, id: "amyra-m", imgId: "017", name: "Amyra M.", hasVideo: true, stats: [{ key: "Location", value: "Bradenton, Florida" }, { key: "Age", value: "40" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "160 lbs." }, { key: "Lost", value: "22 lbs.*" }] },
    { year: 2014, id: "angie-r", imgId: "018", name: "Angie R.", hasVideo: true, stats: [{ key: "Location", value: "Mesa, Arizona" }, { key: "Age", value: "38" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "155 lbs." }, { key: "Lost", value: "37 lbs. (140 lbs. total)*" }] },
    { year: 2014, id: "ben-m", imgId: "019", name: "Ben M.", hasVideo: true, stats: [{ key: "Location", value: "Parsons, Kansas" }, { key: "Age", value: "36" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "282 lbs." }, { key: "Lost", value: "103 lbs.*" }] },
    { year: 2014, id: "bob-s", imgId: "020", name: "Bob S.", hasVideo: true, stats: [{ key: "Location", value: "Cranbrook, British Columbia" }, { key: "Age", value: "39" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "190 lbs." }, { key: "Gained", value: "8 lbs.*" }] },
    { year: 2014, id: "david-j", imgId: "021", name: "David J.", hasVideo: true, stats: [{ key: "Location", value: "Dubuque, Iowa" }, { key: "Age", value: "44" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "238 lbs." }, { key: "Lost", value: "58 lbs.*" }] },
    { year: 2014, id: "elizabeth-b", imgId: "022", name: "Elizabeth B.", hasVideo: true, stats: [{ key: "Location", value: "Capitola, California" }, { key: "Age", value: "31" }, { key: "Height", value: "5'9''" }, { key: "Was", value: "188 lbs." }, { key: "Lost", value: "44 lbs.*" }] },
    { year: 2014, id: "erin-p", imgId: "023", name: "Erin P.", hasVideo: true, stats: [{ key: "Location", value: "Comox, British Columbia" }, { key: "Age", value: "43" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "160 lbs." }, { key: "Lost", value: "24 lbs.*" }] },
    { year: 2014, id: "jason-o", imgId: "024", name: "Jason O.", hasVideo: true, stats: [{ key: "Location", value: "Chapel Hill, North Carolina" }, { key: "Age", value: "39" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "213 lbs." }, { key: "Lost", value: "52 lbs.*" }] },
    { year: 2014, id: "jennifer-r", imgId: "025", name: "Jennifer R.", hasVideo: true, stats: [{ key: "Location", value: "Honey Harbour, Ontario" }, { key: "Age", value: "45" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "149 lbs." }, { key: "Lost", value: "13 lbs.*" }] },
    { year: 2014, id: "judy-l", imgId: "026", name: "Judy L.", hasVideo: true, stats: [{ key: "Location", value: "Toronto, Ontario" }, { key: "Age", value: "60" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "122 lbs." }, { key: "Lost", value: "8 lbs.*" }] },
    { year: 2014, id: "randy-f", imgId: "027", name: "Randy F.", hasVideo: true, stats: [{ key: "Location", value: "Parker, Colorado" }, { key: "Age", value: "61" }, { key: "Height", value: "6'2''" }, { key: "Was", value: "326 lbs." }, { key: "Lost", value: "69 lbs. (85 lbs. total)*" }] },
    { year: 2014, id: "shelagh-r", imgId: "028", name: "Shelagh R.", hasVideo: true, stats: [{ key: "Location", value: "Kitchener, Ontario" }, { key: "Age", value: "49" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "157 lbs." }, { key: "Lost", value: "35 lbs.*" }] },
    { year: 2014, id: "thai-l", imgId: "029", name: "Thai L.", hasVideo: true, stats: [{ key: "Location", value: "Surrey, British Columbia" }, { key: "Age", value: "40" }, { key: "Height", value: "5'1''" }, { key: "Was", value: "148 lbs." }, { key: "Lost", value: "18 lbs.*" }] },
    { year: 2014, id: "will-a", imgId: "030", name: "Will A.", hasVideo: true, stats: [{ key: "Location", value: "Glendale, Arizona" }, { key: "Age", value: "26" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "217.2 lbs." }, { key: "Lost", value: "31.7 lbs.*" }] },
    // 2013
    { year: 2013, id: "aaron-h", imgId: "031", name: "Aaron H.", extraImg: true, stats: [{ key: "Location", value: "New Britain, Connecticut" }, { key: "Age", value: "36" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "250 lbs." }, { key: "Lost", value: "37 lbs.*" }] },
    { year: 2013, id: "angie-t", imgId: "032", name: "Angie T.", extraImg: true, stats: [{ key: "Location", value: "Calgary, Alberta" }, { key: "Age", value: "41" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "165 lbs." }, { key: "Lost", value: "38 lbs.*" }] },
    { year: 2013, id: "belinda-s", imgId: "033", name: "Belinda S.", extraImg: true, stats: [{ key: "Location", value: "Shreveport, Louisiana" }, { key: "Age", value: "53" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "193 lbs." }, { key: "Lost", value: "45 lbs. (50 lbs. total)*" }] },
    { year: 2013, id: "brandon-c", imgId: "034", name: "Brandon C.", extraImg: true, stats: [{ key: "Location", value: "North York, Toronto" }, { key: "Age", value: "28" }, { key: "Height", value: "6'2''" }, { key: "Was", value: "215 lbs." }, { key: "Lost", value: "25 lbs.*" }] },
    { year: 2013, id: "carol-g", imgId: "035", name: "Carol G.", extraImg: true, stats: [{ key: "Location", value: "Long Beach, California" }, { key: "Age", value: "61" }, { key: "Height", value: "5'3''" }, { key: "Was", value: "157 lbs." }, { key: "Lost", value: "22 lbs. (30 lbs. total)*" }] },
    { year: 2013, id: "carolyne-r", imgId: "036", name: "Carolyne R.", extraImg: true, stats: [{ key: "Location", value: "Wasaga Beach, Ontario" }, { key: "Age", value: "59" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "119 lbs." }, { key: "Lost", value: "6 lbs. and 14% body fat*" }] },
    { year: 2013, id: "chris-b", imgId: "037", name: "Chris B.", extraImg: true, stats: [{ key: "Location", value: "Tinley Park, Illinois" }, { key: "Age", value: "47" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "311 lbs." }, { key: "Lost", value: "105 lbs.*" }] },
    { year: 2013, id: "dr-david-n", imgId: "038", name: "Dr. David N.", extraImg: true, stats: [{ key: "Location", value: "Redondo Beach, California" }, { key: "Age", value: "50" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "183 lbs." }, { key: "Lost", value: "14 lbs.*" }] },
    { year: 2013, id: "emily-s", imgId: "039", name: "Emily S.", extraImg: true, stats: [{ key: "Location", value: "New Orleans, Louisiana" }, { key: "Age", value: "30" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "158 lbs." }, { key: "Lost", value: "13 lbs. and 4% body fat*" }] },
    { year: 2013, id: "giovanni-r", imgId: "040", name: "Giovanni R.", extraImg: true, stats: [{ key: "Location", value: "Oak Harbor, Washington" }, { key: "Age", value: "50" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "320 lbs." }, { key: "Lost", value: "124 lbs.*" }] },
    { year: 2013, id: "glen-o", imgId: "041", name: "Glen O.", stats: [{ key: "Location", value: "Grass Valley, Western Australia" }, { key: "Age", value: "36" }, { key: "Height", value: "5'9''" }, { key: "Was", value: "198 lbs." }, { key: "Lost", value: "37.4 lbs.*" }] },
    { year: 2013, id: "jennifer-anne-s", imgId: "042", name: "Jennifer-Anne S.", stats: [{ key: "Location", value: "Penang, Malaysia" }, { key: "Age", value: "47" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "165 lbs." }, { key: "Lost", value: "24.2 lbs.*" }] },
    { year: 2013, id: "joe-m", imgId: "043", name: "Joe M.", extraImg: true, stats: [{ key: "Location", value: "Calgary, Alberta" }, { key: "Age", value: "45" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "255 lbs." }, { key: "Lost", value: "51 lbs. (74 lbs. total)*" }] },
    { year: 2013, id: "kelly-ann-z", imgId: "044", name: "Kelly Ann Z.", extraImg: true, stats: [{ key: "Location", value: "Toronto, Canada" }, { key: "Age", value: "41" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "185 lbs." }, { key: "Lost", value: "61 lbs.*" }] },
    { year: 2013, id: "mike-t", imgId: "045", name: "Mike T.", extraImg: true, stats: [{ key: "Location", value: "Ogden, Utah" }, { key: "Age", value: "42" }, { key: "Lost", value: "262 lbs.*" }] },
    { year: 2013, id: "nils-m", imgId: "046", name: "Nils M.", extraImg: true, stats: [{ key: "Location", value: "Charlotte, North Carolina" }, { key: "Age", value: "46" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "197 lbs. and 23.9% body fat" }, { key: "Lost", value: "40 lbs. and 16.1% body fat (now 7.8%)*" }] },
    { year: 2013, id: "dr-paul-b", imgId: "047", name: "Dr. Paul B.", extraImg: true, stats: [{ key: "Location", value: "Oakville, Ontario" }, { key: "Age", value: "41" }, { key: "Height", value: "5'0''" }, { key: "Was", value: "200 lbs." }, { key: "Lost", value: "32 lbs.*" }] },
    { year: 2013, id: "richard-b", imgId: "048", name: "Richard B.", extraImg: true, stats: [{ key: "Location", value: "Branchton, Ontario" }, { key: "Age", value: "66" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "193.5 lbs." }, { key: "Lost", value: "19 lbs.*" }, { key: "Gained", value: "7 lbs. lean muscle*" }] },
    { year: 2013, id: "richard-r", imgId: "049", name: "Richard R.", extraImg: true, stats: [{ key: "Location", value: "Goffstown, New Hampshire" }, { key: "Age", value: "41" }, { key: "Height", value: "6'1''" }, { key: "Was", value: "390 lbs." }, { key: "Lost", value: "126 lbs.*" }] },
    { year: 2013, id: "shannon-k", imgId: "050", name: "Shannon K.", stats: [{ key: "Location", value: "British Columbia, Canada" }, { key: "Age", value: "34" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "286 lbs." }, { key: "Lost", value: "131 lbs.*" }] },
    // 2012
    { year: 2012, id: "angela-r", imgId: "051", name: "Angela R.", extraImg: true, stats: [{ key: "Location", value: "Nine Mile Falls, WA" }, { key: "Age", value: "47" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "161.2 lbs." }, { key: "Lost", value: "21.4 lbs.*" }] },
    { year: 2012, id: "craig-c", imgId: "052", name: "Craig C.", extraImg: true, stats: [{ key: "Location", value: "Kelowna, British Columbia" }, { key: "Age", value: "27" }, { key: "Height", value: "6'3''" }, { key: "Was", value: "241 lbs." }, { key: "Lost", value: "37  lbs. (126 lbs. total)*" }] },
    { year: 2012, id: "dr-victoria-t", imgId: "053", name: "Dr. Victoria T.", extraImg: true, stats: [{ key: "Location", value: "Los Angeles, California" }, { key: "Age", value: "53" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "210 lbs." }, { key: "Lost", value: "71 lbs. and 81 inches*" }] },
    { year: 2012, id: "elizabeth-m", imgId: "054", name: "Elizabeth M.", extraImg: true, stats: [{ key: "Location", value: "Charlotte, North Carolina" }, { key: "Age", value: "41" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "137 lbs." }, { key: "Lost", value: "23 lbs.; 13.9% body fat down from 34%*" }] },
    { year: 2012, id: "frank-p", imgId: "055", name: "Frank P.", extraImg: true, stats: [{ key: "Location", value: "Mililani, Hawaii" }, { key: "Age", value: "29" }, { key: "Height", value: "6'3''" }, { key: "Was", value: "367 lbs." }, { key: "Lost", value: "122 lbs. and 103.75 inches*" }] },
    { year: 2012, id: "leanne-k", imgId: "056", name: "Leanne K.", extraImg: true, stats: [{ key: "Location", value: "Calgary, Alberta" }, { key: "Age", value: "46" }, { key: "Height", value: "5'7''" }, { key: "Was", value: "160 lbs." }, { key: "Lost", value: "30 lbs.*" }] },
    { year: 2012, id: "lois-l", imgId: "057", name: "Lois L.", extraImg: true, stats: [{ key: "Location", value: "Queensland, Australia" }, { key: "Age", value: "66" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "161 lbs." }, { key: "Lost", value: "31 lbs.*" }] },
    { year: 2012, id: "miriam-b", imgId: "058", name: "Mariam B.", extraImg: true, stats: [{ key: "Location", value: "New South Wales" }, { key: "Age", value: "47" }, { key: "Lost (During IsaBody Challenge)", value: "29 lbs.*" }] },
    { year: 2012, id: "patricia-h", imgId: "059", name: "Patricia H.", extraImg: true, stats: [{ key: "Location", value: "New South Wales" }, { key: "Age", value: "65" }, { key: "Lost (During IsaBody Challenge)", value: "33 lbs.*" }] },
    { year: 2012, id: "rebekah-h", imgId: "060", name: "Rebekah H.", extraImg: true, stats: [{ key: "Location", value: "Queensland, Australia" }, { key: "Age", value: "33" }, { key: "Lost", value: "23 kg.*" }] },
    { year: 2012, id: "tiff-d", imgId: "061", name: "Tiff D.", extraImg: true, stats: [{ key: "Location", value: "Salt Lake City, Utah" }, { key: "Age", value: "28" }, { key: "Height", value: "5'3''" }, { key: "Was", value: "158 lbs." }, { key: "Lost", value: "32 lbs.*" }] },
    // 2011
    { year: 2011, id: "annie-s", imgId: "062", name: "Annie S.", extraImg: true, stats: [{ key: "Location", value: "Milton, Ontario" }, { key: "Age", value: "32" }, { key: "Lost", value: "39.5 lbs. and 8 dress sizes*" }] },
    { year: 2011, id: "anthony-s", imgId: "063", name: "Anthony S.", extraImg: true, stats: [{ key: "Location", value: "Lansdowne, Pennsylvania" }, { key: "Age", value: "35" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "368 lbs." }, { key: "Lost", value: "97 lbs. (140 total)*" }] },
    { year: 2011, id: "gary-s", imgId: "064", name: "Gary S.", extraImg: true, stats: [{ key: "Location", value: "Las Vegas, Nevada" }, { key: "Age", value: "53" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "207 lbs." }, { key: "Lost", value: "40 lbs. and 5 pant sizes*" }] },
    { year: 2011, id: "jake-f", imgId: "065", name: "Jake F.", extraImg: true, stats: [{ key: "Location", value: "Houston, Texas" }, { key: "Age", value: "25" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "215 lbs." }, { key: "Lost", value: "56 lbs. and 4 pant sizes*" }] },
    { year: 2011, id: "jessica-p", imgId: "066", name: "Jessica P.", extraImg: true, stats: [{ key: "Location", value: "Billings, Montana" }, { key: "Age", value: "30" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "216 lbs." }, { key: "Lost", value: "57 lbs. and 6 dress sizes*" }] },
    { year: 2011, id: "jill-b", imgId: "067", name: "Jill B.", extraImg: true, stats: [{ key: "Location", value: "Pleasant View, Utah" }, { key: "Age", value: "39" }, { key: "Was", value: "187 lbs." }, { key: "Lost", value: "55 lbs. and 3% body fat*" }] },
    { year: 2011, id: "joseph-p", imgId: "068", name: "Joseph P.", extraImg: true, stats: [{ key: "Location", value: "Winkler, Manitoba" }, { key: "Age", value: "50" }, { key: "Was", value: "378 lbs." }, { key: "Lost", value: "106 lbs.*" }] },
    { year: 2011, id: "lisa-w", imgId: "069", name: "Lisa W.", extraImg: true, stats: [{ key: "Location", value: "Calgary, Alberta" }, { key: "Age", value: "41" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "155 lbs." }] },
    { year: 2011, id: "liz-m", imgId: "070", name: "Liz M.", extraImg: true, stats: [{ key: "Was", value: "172 lbs." }, { key: "Lost", value: "28 lbs.*" }] },
    { year: 2011, id: "marina-b", imgId: "071", name: "Marina B.", extraImg: true, stats: [{ key: "Location", value: "Qualicum Beach, British Columbia" }, { key: "Age", value: "50" }, { key: "Was", value: "221 lbs." }, { key: "Lost", value: "48.5 lbs and 6 dress sizes*" }] },
    { year: 2011, id: "nathan-f", imgId: "072", name: "Nathan F.", extraImg: true, stats: [{ key: "Location", value: "Brookings, South Dakota" }, { key: "Age", value: "30" }, { key: "Height", value: "6'1.5''" }, { key: "Was", value: "294 lbs." }, { key: "Lost", value: "42 lbs and 22 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "102 lbs.*" }] },
    { year: 2011, id: "pamela-m-and-kyle-s", imgId: "073", name: "Pamela M. & Kyle S.", extraImg: true, stats: [{ key: "Location", value: "Brampton, Ontario" }, { key: "Age", value: "49 and 20" }, { key: "Was", value: "155 lbs. and 196 lbs." }, { key: "Lost", value: "26lbs.* and 48 lbs.*" }] },
    { year: 2011, id: "rhonda-o", imgId: "074", name: "Rhonda O.", extraImg: true, stats: [{ key: "Location", value: "Sicklerville, New Jersey" }, { key: "Age", value: "55" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "238 lbs." }, { key: "Lost", value: "55 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "2 sizes and 25 lbs.*" }] },
    { year: 2011, id: "rick-k", imgId: "075", name: "Rick K.", extraImg: true, stats: [{ key: "Location", value: "Wasilla, Alaska" }, { key: "Age", value: "59" }, { key: "Was", value: "218 lbs." }, { key: "Lost", value: "31 lbs and 8 inches off waist*" }] },
    { year: 2011, id: "todd-w", imgId: "076", name: "Todd W.", extraImg: true, stats: [{ key: "Location", value: "Mississauga, Ontario" }, { key: "Age", value: "41" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "245 lbs." }, { key: "Lost", value: "50 lbs. and 12 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "15 lbs.*" }] },
    // 2010
    { year: 2010, id: "brian-r", imgId: "077", name: "Brian R.", extraImg: true, stats: [{ key: "Location", value: "Ponoka, Alberta" }, { key: "Age", value: "52" }, { key: "Height", value: "5'10.5''" }, { key: "Was", value: "371 lbs." }, { key: "Lost", value: "114 lbs. and 6 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "26 lbs. and 4 inches off waist*" }] },
    { year: 2010, id: "eric-f", imgId: "078", name: "Eric F.", extraImg: true, stats: [{ key: "Location", value: "Lakewood, Washington" }, { key: "Age", value: "20" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "185 lbs." }, { key: "Lost", value: "30 lbs. and 8% body fat*" }] },
    { year: 2010, id: "geri-n", imgId: "079", name: "Geri N.", extraImg: true, stats: [{ key: "Location", value: "West Jordan, Utah" }, { key: "Age", value: "51" }, { key: "Height", value: "5'3''" }, { key: "Was", value: "203 lbs." }, { key: "Lost", value: "58 lbs.*" }, { key: "Lost During 2010 Challenge", value: "14 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "3 lbs.*" }] },
    { year: 2010, id: "greg-and-loriann-w", imgId: "080", name: "Greg & Loriann W.", extraImg: true, stats: [{ key: "Location", value: "Fort Wayne, Indiana" }, { key: "Age", value: "44 and 42" }, { key: "Height", value: "6'1'' and 5'7''" }, { key: "Was", value: "230 lbs. and 164 lbs." }, { key: "Lost", value: "36 lbs.* and 25 lbs.*" }] },
    { year: 2010, id: "harley-d", imgId: "081", name: "Harley D.", extraImg: true, stats: [{ key: "Location", value: "Walkersville, Maryland" }, { key: "Age", value: "44" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "360 lbs." }, { key: "Lost", value: "167 lbs. and 9 pant sizes*" }] },
    { year: 2010, id: "holly-d", imgId: "082", name: "Holly D.", extraImg: true, stats: [{ key: "Location", value: "Minneapolis, Minnesota" }, { key: "Age", value: "33" }, { key: "Height", value: "5'6.5''" }, { key: "Was", value: "231 lbs." }, { key: "Lost", value: "52 lbs. and 4 dress sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "38 lbs. and 3 dress sizes*" }] },
    { year: 2010, id: "james-p", imgId: "083", name: "James P.", extraImg: true, stats: [{ key: "Location", value: "Anaheim, California" }, { key: "Age", value: "50" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "270 lbs." }, { key: "Lost", value: "85 lbs. and 6 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "20 lbs.*" }] },
    { year: 2010, id: "jean-f", imgId: "084", name: "Jean F.", extraImg: true, stats: [{ key: "Location", value: "Verndale, Minnesota" }, { key: "Age", value: "50" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "429 lbs." }, { key: "Lost", value: "201 lbs." }, { key: "Lost During 2010 Challenge", value: "66 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "11 lbs*" }] },
    { year: 2010, id: "mary-a", imgId: "085", name: "Mary A.", extraImg: true, stats: [{ key: "Location", value: "Yelm, Washington" }, { key: "Age", value: "50" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "164 lbs." }, { key: "Lost", value: "38 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "5 lbs." }] },
    { year: 2010, id: "melanie-s", imgId: "086", name: "Melanie S.", extraImg: true, stats: [{ key: "Location", value: "Sequim, Washington" }, { key: "Age", value: "33" }, { key: "Height", value: "5'7''" }, { key: "Was", value: "170 lbs." }, { key: "Lost", value: "41 lbs. and 4 pant sizes*" }] },
    { year: 2010, id: "mercedes-r", imgId: "087", name: "Mercedes R.", extraImg: true, stats: [{ key: "Location", value: "Atlanta, Georgia" }, { key: "Age", value: "40" }, { key: "Height", value: "5'1''" }, { key: "Was", value: "148 lbs." }, { key: "Lost", value: "45 lbs.*" }] },
    { year: 2010, id: "michael-o", imgId: "088", name: "Michael O.", extraImg: true, stats: [{ key: "Location", value: "Las Vegas, Nevada" }, { key: "Age", value: "27" }, { key: "Height", value: "6'4''" }, { key: "Was", value: "410 lbs." }, { key: "Lost", value: "146 lbs and 133.5 inches*" }, { key: "Additional Weight Lost Since Challenge", value: "39 lbs. and 27.75 inches*" }] },
    { year: 2010, id: "michael-w", imgId: "089", name: "Michael W.", extraImg: true, stats: [{ key: "Location", value: "Fayetteville, Georgia" }, { key: "Age", value: "23" }, { key: "Height", value: "5'9.5''" }, { key: "Was", value: "383 lbs." }, { key: "Lost", value: "140 lbs., 117 inches, and 8 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "10 lbs.*" }] },
    { year: 2010, id: "oralia-a", imgId: "090", name: "Oralia A.", extraImg: true, stats: [{ key: "Location", value: "Del Rio, Texas" }, { key: "Age", value: "47" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "293 lbs." }, { key: "Lost", value: "72 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "45 lbs.*" }] },
    { year: 2010, id: "patrick-d", imgId: "091", name: "Patrick D.", extraImg: true, stats: [{ key: "Location", value: "Abscon, New Jersey" }, { key: "Age", value: "46" }, { key: "Height", value: "6'1''" }, { key: "Was", value: "295 lbs." }, { key: "Lost", value: "85 lbs. and 4 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "5 lbs*" }] },
    // 2009
    { year: 2009, id: "april-w", imgId: "092", name: "April W.", extraImg: true, stats: [{ key: "Location", value: "Newberry, Florida" }, { key: "Age", value: "27" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "353 lbs." }, { key: "Lost", value: "63 lbs. and 83 inches*" }, { key: "Additional Weight Lost Since Challenge", value: "20 lbs.*" }] },
    { year: 2009, id: "bill-and-keller-b", imgId: "093", name: "Bill & Keller B.", extraImg: true, stats: [{ key: "Location", value: "Sequim, Washington" }, { key: "Age", value: "42 and 19" }, { key: "Was", value: "Bill: 217 lbs., Keller: 207 lbs." }, { key: "Lost", value: "Bill: 28 lbs. and 12% body fat*, Keller: 22 lbs. and 17% body fat*" }] },
    { year: 2009, id: "christina-k", imgId: "094", name: "Christina K.", extraImg: true, stats: [{ key: "Location", value: "Wilmington, North Carolina" }, { key: "Age", value: "41" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "287 lbs." }, { key: "Lost", value: "75 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "17 lbs.*" }] },
    { year: 2009, id: "donovan-m", imgId: "095", name: "Donovan M.", extraImg: true, stats: [{ key: "Location", value: "San Diego, California" }, { key: "Age", value: "36" }, { key: "Height", value: "6'3''" }, { key: "Was", value: "285 lbs." }, { key: "Lost", value: "46 lbs." }, { key: "Additional Weight Lost Since Challenge", value: "7 lbs.*" }] },
    { year: 2009, id: "dr-ken-s", imgId: "096", name: "Dr. Ken S.", extraImg: true, stats: [{ key: "Location", value: "Milton-Freewater, Oregon" }, { key: "Age", value: "45" }, { key: "Height", value: "5'9''" }, { key: "Was", value: "295 lbs." }, { key: "Lost", value: "101 lbs. and 112 inches*" }, { key: "Additional Weight Lost Since Challenge", value: "4 lbs.*" }] },
    { year: 2009, id: "dr-todd-g", imgId: "097", name: "Dr. Todd G.", extraImg: true, stats: [{ key: "Location", value: "Yuba City, California" }, { key: "Age", value: "53" }, { key: "Was", value: "283 lbs." }, { key: "Lost", value: "70 lbs. and 8 pant sizes*" }] },
    { year: 2009, id: "jana-b", imgId: "098", name: "Jana B.", extraImg: true, stats: [{ key: "Location", value: "Albuquerque, New Mexico" }, { key: "Age", value: "54" }, { key: "Height", value: "5'8''" }, { key: "Was", value: "253 lbs." }, { key: "Lost", value: "40 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "32 lbs.*" }] },
    { year: 2009, id: "jason-v", imgId: "099", name: "Jason V.", extraImg: true, stats: [{ key: "Location", value: "Montreal, Quebec" }, { key: "Age", value: "29" }, { key: "Height", value: "6'0''" }, { key: "Was", value: "259 lbs." }, { key: "Lost", value: "57 lbs." }] },
    { year: 2009, id: "jeff-m", imgId: "100", name: "Jeff M.", extraImg: true, stats: [{ key: "Location", value: "Maricopa, Arizona" }, { key: "Age", value: "38" }, { key: "Was", value: "365 lbs." }, { key: "Lost", value: "90 lbs. and 5 pant sizes*" }, { key: "Additional Weight Lost Since Challenge", value: "12 lbs.*" }] },
    { year: 2009, id: "leslie-h", imgId: "101", name: "Leslie H.", extraImg: true, stats: [{ key: "Location", value: "Naramata, British Columbia" }, { key: "Age", value: "46" }, { key: "Height", value: "5'4''" }, { key: "Was", value: "222 lbs." }, { key: "Lost", value: "57 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "10 lbs.*" }] },
    { year: 2009, id: "mark-d", imgId: "102", name: "Mark D.", extraImg: true, stats: [{ key: "Location", value: "Westminster, California" }, { key: "Age", value: "53" }, { key: "Was", value: "342 lbs." }, { key: "Lost", value: "102 lbs.*" }, { key: "Additional Weight Lost Since Challenge", value: "78 lbs.*" }] },
    { year: 2009, id: "melisa-s", imgId: "103", name: "Melisa S.", extraImg: true, stats: [{ key: "Location", value: "West Jordan, Utah" }, { key: "Age", value: "32" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "346 lbs." }, { key: "Lost", value: "74 lbs*" }, { key: "Additional Weight Lost Since Challenge", value: "12 lbs.*" }] },
    { year: 2009, id: "mike-h", imgId: "104", name: "Mike H.", extraImg: true, stats: [{ key: "Location", value: "Worcester, Massachusetts" }, { key: "Age", value: "50" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "234 lbs." }, { key: "Lost", value: "51 lbs. and 20% body fat*" }, { key: "Additional Weight Lost Since Challenge", value: "9 lbs.*" }] },
    { year: 2009, id: "robyn-c", imgId: "105", name: "Robyn C.", extraImg: true, stats: [{ key: "Location", value: "Macedon, New York" }, { key: "Age", value: "54" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "184 lbs." }, { key: "Lost", value: "50 lbs. and 16% body fat*" }] },
    { year: 2009, id: "sharon-b", imgId: "106", name: "Sharon B.", extraImg: true, stats: [{ key: "Location", value: "Mission, British Columbia" }, { key: "Age", value: "62" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "192 lbs." }, { key: "Lost", value: "42 lbs. and 4 dress sizes*" }] },
    { year: 2009, id: "ryan-r", imgId: "107", name: "Ryan R.", extraImg: true, stats: [{ key: "Location", value: "Salt Lake City, Utah" }, { key: "Age", value: "25" }, { key: "Height", value: "6'3''" }, { key: "Was", value: "427 lbs." }, { key: "Lost", value: "110 lbs.*" }] },
    // 2008
    { year: 2008, id: "anthony-d", imgId: "108", name: "Anthony D.", extraImg: true, stats: [{ key: "Location", value: "Paramus, New Jersey" }, { key: "Age", value: "22" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "392 lbs." }, { key: "Lost", value: "153 lbs. and 16 pant sizes*" }] },
    { year: 2008, id: "bruce-and-theresa-c", imgId: "109", name: "Bruce & Theresa C.", extraImg: true, stats: [{ key: "Location", value: "New Smyrna Beach, Florida" }, { key: "Age", value: "38" }, { key: "Height", value: "5'9'' and 5'5''" }, { key: "Was", value: "210 lbs. and 135 lbs." }, { key: "Lost", value: "37 lbs. and 33 inches* and 18 lbs. and 24 inches*" }] },
    { year: 2008, id: "ciera-w", imgId: "110", name: "Ciera W.", extraImg: true, stats: [{ key: "Location", value: "Orem, Utah" }, { key: "Age", value: "22" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "250 lbs." }, { key: "Lost", value: "100 lbs.*" }] },
    { year: 2008, id: "derrek-s", imgId: "111", name: "Derrek S.", extraImg: true, stats: [{ key: "Location", value: "Twin Falls, Idaho" }, { key: "Age", value: "18" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "275 lbs." }, { key: "Lost", value: "123 lbs. and 41% body fat*" }] },
    { year: 2008, id: "elaine-g", imgId: "112", name: "Elaine G.", extraImg: true, stats: [{ key: "Location", value: "Fort Recovery, Ohio" }, { key: "Age", value: "55" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "275 lbs." }, { key: "Lost", value: "60 lbs. and 35 inches*" }] },
    { year: 2008, id: "gary-m", imgId: "113", name: "Gary M.", extraImg: true, stats: [{ key: "Location", value: "St. George, Utah" }, { key: "Age", value: "64" }, { key: "Height", value: "5'11''" }, { key: "Was", value: "184 lbs." }, { key: "Lost", value: "8 lbs. during Challenge, 48 lbs. overall*" }] },
    { year: 2008, id: "jess-b", imgId: "114", name: "Jess B.", extraImg: true, stats: [{ key: "Location", value: "Redmond, Oregon" }, { key: "Age", value: "67" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "255 lbs." }, { key: "Lost", value: "22 lbs. and 4 belt sizes*" }] },
    { year: 2008, id: "joe-b", imgId: "115", name: "Joe B.", extraImg: true, stats: [{ key: "Location", value: "East Durham, New York" }, { key: "Age", value: "61" }, { key: "Height", value: "5'10''" }, { key: "Was", value: "232 lbs." }, { key: "Lost", value: "49 lbs. and 13% body fat*" }] },
    { year: 2008, id: "linda-o", imgId: "116", name: "Linda O.", extraImg: true, stats: [{ key: "Location", value: "Lubbock, Texas" }, { key: "Age", value: "54" }, { key: "Height", value: "5'0''" }, { key: "Was", value: "215 lbs." }, { key: "Lost", value: "66 lbs. and 97 inches*" }] },
    { year: 2008, id: "lyndsay-and-cory-s", imgId: "117", name: "Lyndsay & Cory S.", extraImg: true, stats: [{ key: "Location", value: "Edgewater, British Columbia" }, { key: "Age", value: "28 and 29" }, { key: "Height", value: "5'6'' and 5'11''" }, { key: "Was", value: "155 lbs. and 255 lbs." }, { key: "Lost", value: "26 lbs.* and 30 lbs.*" }] },
    { year: 2008, id: "mary-p", imgId: "118", name: "Mary P.", extraImg: true, stats: [{ key: "Location", value: "Granbury, Texas" }, { key: "Age", value: "60" }, { key: "Height", value: "5'5''" }, { key: "Was", value: "144 lbs." }, { key: "Lost", value: "4 lbs. and 9.5 inches*" }] },
    { year: 2008, id: "matt-c", imgId: "119", name: "Matt C.", extraImg: true, stats: [{ key: "Location", value: "Ontario, Canada" }, { key: "Age", value: "33" }, { key: "Height", value: "5'2''" }, { key: "Was", value: "359 lbs." }, { key: "Lost", value: "141 lbs. and 20% body fat*" }] },
    { year: 2008, id: "michelle-p", imgId: "120", name: "Michelle P.", extraImg: true, stats: [{ key: "Location", value: "Spokane, Washington" }, { key: "Age", value: "39" }, { key: "Height", value: "5'6''" }, { key: "Was", value: "232 lbs." }, { key: "Lost", value: "71 lbs.*" }] },
    { year: 2008, id: "mike-w", imgId: "121", name: "Mike W.", extraImg: true, stats: [{ key: "Location", value: "Nanaimo, British Columbia" }, { key: "Age", value: "49" }, { key: "Height", value: "6'5''" }, { key: "Was", value: "383 lbs." }, { key: "Lost", value: "165 lbs., 155 inches, and 9 pant sizes*" }] },
    { year: 2008, id: "radha-b", imgId: "122", name: "Radha B.", extraImg: true, stats: [{ key: "Location", value: "West Nyack, New York" }, { key: "Age", value: "64" }, { key: "Height", value: "5'3''" }, { key: "Was", value: "170 lbs." }, { key: "Lost", value: "20 lbs. and 21.5 inches*" }] },
    // 2007
    { year: 2007, id: "adam-v", imgId: "123", name: "Adam V.", stats: [{ key: "Location", value: "Scotts Valley, California" }, { key: "Age", value: "39" }, { key: "Height", value: "6'1''" }, { key: "Was", value: "238 lbs." }, { key: "Lost", value: "60 lbs.*" }] },
    { year: 2007, id: "daniel-m", imgId: "124", name: "Daniel M.", stats: [{ key: "Location", value: "Alaska" }, { key: "Lost", value: "60 lbs.*" }] },
    { year: 2007, id: "david-g", imgId: "125", name: "David G.", stats: [{ key: "Location", value: "Murray, Utah" }, { key: "Was", value: "295 lbs." }, { key: "Lost", value: "90 lbs.*" }] },
    { year: 2007, id: "david-w", imgId: "126", name: "David W.", stats: [{ key: "Location", value: "Saskatoon, Saskatchewan" }, { key: "Lost", value: "73 lbs.*" }] },
    { year: 2007, id: "derek-z", imgId: "127", name: "Derek Z.", stats: [{ key: "Location", value: "Prince George, British Columbia" }, { key: "Was", value: "300 lbs." }, { key: "Lost", value: "83 lbs.*" }] },
    { year: 2007, id: "dina-m", imgId: "128", name: "Dina M.", stats: [{ key: "Location", value: "Dallas, Texas" }, { key: "Lost", value: "41.5 lbs.*" }] },
    { year: 2007, id: "donna-o", imgId: "129", name: "Donna O.", stats: [{ key: "Location", value: "Trumbull, Connecticut" }, { key: "Lost", value: "15 lbs*" }] },
    { year: 2007, id: "eric-and-amber-h", imgId: "130", name: "Eric & Amber H.", stats: [{ key: "Location", value: "Kamloops, British Columbia" }, { key: "Lost", value: "80 lbs*" }] }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public person2007: Person_2007Provider,
    public person2008: Person_2008Provider,
    public person2009: Person_2009Provider,
    public person2010: Person_2010Provider,
    public person2011: Person_2011Provider,
    public person2012: Person_2012Provider,
    public person2013: Person_2013Provider,
    public person2014: Person_2014Provider,
    public person2015: Person_2015Provider,
    public modalCtrl: ModalController) {

    let name = this.navParams.get("name");
    this.person = this.people.find(function (obj) { return obj.id === name; });
  }

  goBack() {
    this.navCtrl.pop();
  }

  openVideoModal() {
    var data: any;

    switch (this.person.id) {
      case "abilio-v":
        data = {
          name: "Abilio V.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Rediscover%20Your%20Health%20and%20Passion.mp4?alt=media&token=362c6830-6ac6-4627-9025-9e440c70af41"
        };
        break;

      case "amy-o":
        data = {
          name: "Amy O.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20A%20Change%20for%20the%20Better.mp4?alt=media&token=6a28897f-5b75-4996-9a7e-d1c1d81d5dc1"
        };
        break;

      case "angela-f":
        data = {
          name: "Angela F.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20More%20Than%20a%20Physical%20Transformation.mp4?alt=media&token=7724df79-e4c2-44bb-9acd-c5ae98cb3843"
        };
        break;

      case "billy-a":
        data = {
          name: "Billy A.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20A%20Product%20of%20the%20Product.mp4?alt=media&token=4a2c0fa1-d0d1-4181-84c5-a95b6e754c1e"
        };
        break;

      case "caylen-w":
        data = {
          name: "Caylen W.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Striving%20for%20the%20Best.mp4?alt=media&token=fb65c80d-a3c0-4d78-8b91-9c23b1db6828"
        };
        break;

      case "ellen-c":
        data = {
          name: "Ellen C.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Rewriting%20Your%20Story.mp4?alt=media&token=d02fc79a-e533-4689-81f5-9c92af41dae0"
        };
        break;

      case "james-b":
        data = {
          name: "James B.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Build%20Yourself.mp4?alt=media&token=2af41a2c-0eee-48ae-9ea1-666a8a6acb91"
        };
        break;

      case "jesse-j":
        data = {
          name: "Jesse J.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Your%20Body%20is%20Limitless%20With%20the%20Proper%20Nutrition.mp4?alt=media&token=8175a2cf-0315-4447-8e81-1094aba87d70"
        };
        break;

      case "john-m":
        data = {
          name: "John M.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Become%20Amazed.mp4?alt=media&token=badc9afe-3c7b-4ef4-817e-96b3f448a5b9"
        };
        break;

      case "kathy-p":
        data = {
          name: "Kathy P.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Finding%20Health%20and%20Happiness.mp4?alt=media&token=c0f1d513-bf8c-4e98-867d-6731edfb3975"
        };
        break;

      case "kelli-e":
        data = {
          name: "Kelli E.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Regain%20Control%20of%20Your%20Health.mp4?alt=media&token=2e3a7739-d619-422f-8693-b03198718a4e"
        };
        break;

      case "michael-l":
        data = {
          name: "Michael L.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Surpass%20Your%20Expectations.mp4?alt=media&token=bef8d7fc-2cb6-47ed-8eff-7d3df4555a00"
        };
        break;

      case "natalie-h":
        data = {
          name: "Natalie H.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Boost%20Confidence%20and%20Self%20Esteem.mp4?alt=media&token=3ab091ce-2dfd-4398-961e-ed263252fc61"
        };
        break;

      case "nicole-s":
        data = {
          name: "Nicole S.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Gaining%20Freedom%20Gaining%20Life.mp4?alt=media&token=4f5b634e-32a6-4ed2-8cb3-b5aa0fcf8359"
        };
        break;

      case "ryan-e":
        data = {
          name: "Ryan E.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Gaining%20Health%20Back.mp4?alt=media&token=64338590-7321-4fa1-8ae3-ed5bab83374d"
        };
        break;

      case "abby-g":
        data = {
          name: "Abby G.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Its%20Not%20Just%20About%20Physical%20Weight%20Loss.mp4?alt=media&token=4fa8f986-cae8-43ef-88f6-98250406eae4"
        };
        break;

      case "amyra-m":
        data = {
          name: "Amyra M.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Cross%20Barriers%20and%20Conquer%20Your%20Goals.mp4?alt=media&token=f06741c2-38aa-466d-8163-30e5450fa4f9"
        };
        break;

      case "angie-r":
        data = {
          name: "Angie R.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Youll%20Meet%20a%20Whole%20New%20Family.mp4?alt=media&token=cf37d450-5947-4128-a090-e859a50690f0"
        };
        break;

      case "ben-m":
        data = {
          name: "Ben M.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Make%20Yourself%20the%20Person%20You%20Want%20to%20Be.mp4?alt=media&token=f42b183a-3f95-4e27-a502-01b9393e36cc"
        };
        break;

      case "bob-s":
        data = {
          name: "Bob S.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20It%20Helps%20You%20Build%20Muscle.mp4?alt=media&token=f7c02c1c-1176-4501-91d5-78098b128660"
        };
        break;

      case "david-j":
        data = {
          name: "David J.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20It%20Saved%20My%20Life.mp4?alt=media&token=02c4f16f-221e-42ad-ae50-b96d0fe97b0f"
        };
        break;

      case "elizabeth-b":
        data = {
          name: "Elizabeth B.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20It%20Instills%20Confidence.mp4?alt=media&token=d107c49d-e931-4dfe-ac6c-d1522f838863"
        };
        break;

      case "erin-p":
        data = {
          name: "Erin P.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Take%20Your%20Body%20to%20the%20Next%20Level.mp4?alt=media&token=b711df31-e1e1-49bf-b945-3ec34e754f3d"
        };
        break;

      case "jason-o":
        data = {
          name: "Jason O.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20%20Getting%20Back%20to%20the%20Basics.mp4?alt=media&token=562f4767-b202-4bb3-a8f4-6b96d38c0a81"
        };
        break;

      case "jennifer-r":
        data = {
          name: "Jennifer R.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Youre%20Going%20to%20Feel%20Incredible.mp4?alt=media&token=0453209d-6ccf-4c9e-a96f-aa79262219dc"
        };
        break;

      case "judy-l":
        data = {
          name: "Judy L.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20It%20Helps%20You%20Age%20Healthily.mp4?alt=media&token=f2fd066c-6e38-484a-bc83-9f888873ce54"
        };
        break;

      case "randy-f":
        data = {
          name: "Randy F.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Reverse%20Downward%20Spirals.mp4?alt=media&token=9993d41b-eb9e-4844-a098-e31afe7fa685"
        };
        break;

      case "shelagh-r":
        data = {
          name: "Shelagh R.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Fill%20Your%20Life%20With%20Positivity.mp4?alt=media&token=20e93fe8-1d48-4218-be0d-bfd84299fe50"
        };
        break;

      case "thai-l":
        data = {
          name: "Thai L.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Lose%20Weight%20Build%20Muscle%20Live%20With%20Purpose.mp4?alt=media&token=f98ea4f5-9727-4d8a-aedc-80045d4c8cb8"
        };
        break;

      case "will-a":
        data = {
          name: "Will A.",
          url: "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2FIsaBody%20Challenge%20Getting%20Fit%20for%20the%20Big%20Stage.mp4?alt=media&token=22be008a-0b82-4831-83d7-0708ca5f4b05"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
