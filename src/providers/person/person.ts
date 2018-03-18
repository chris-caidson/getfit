import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class PersonProvider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      // 2015
      case "abilio-v": htmlString = this.getAbilioVSuccessStory(); break;
      case "amy-o": htmlString = this.getAmyOSuccessStory(); break;
      case "angela-f": htmlString = this.getAngelaFSuccessStory(); break;
      case "billy-a": htmlString = this.getBillyASuccessStory(); break;
      case "caylen-w": htmlString = this.getCaylenWSuccessStory(); break;
      case "ellen-c": htmlString = this.getEllenCSuccessStory(); break;
      case "james-b": htmlString = this.getJamesBSuccessStory(); break;
      case "jesse-j": htmlString = this.getJesseJSuccessStory(); break;
      case "john-m": htmlString = this.getJohnMSuccessStory(); break;
      case "kathy-p": htmlString = this.getKathyPSuccessStory(); break;
      case "kelli-e": htmlString = this.getKelliESuccessStory(); break;
      case "michael-l": htmlString = this.getMichaelLSuccessStory(); break;
      case "natalie-h": htmlString = this.getNatalieHSuccessStory(); break;
      case "nicole-s": htmlString = this.getNicoleSSuccessStory(); break;
      case "ryan-e": htmlString = this.getRyanESuccessStory(); break;
      // 2014
      case "abby-g": htmlString = this.getAbbyGSuccessStory(); break;
      case "amyra-m": htmlString = this.getAmyraMSuccessStory(); break;
      case "angie-r": htmlString = this.getAngieRSuccessStory(); break;
      case "ben-m": htmlString = this.getBenMSuccessStory(); break;
      case "bob-s": htmlString = this.getBobSSuccessStory(); break;
      case "david-j": htmlString = this.getDavidJSuccessStory(); break;
      case "elizabeth-b": htmlString = this.getElizabethBSuccessStory(); break;
      case "erin-p": htmlString = this.getErinPSuccessStory(); break;
      case "jason-o": htmlString = this.getJasonOSuccessStory(); break;
      case "jennifer-r": htmlString = this.getJenniferRSuccessStory(); break;
      case "judy-l": htmlString = this.getJudyLSuccessStory(); break;
      case "randy-f": htmlString = this.getRandyFSuccessStory(); break;
      case "shelagh-r": htmlString = this.getShelaghRSuccessStory(); break;
      case "thai-l": htmlString = this.getThaiLSuccessStory(); break;
      case "will-a": htmlString = this.getWillASuccessStory(); break;
      // 2013
      case "aaron-h": htmlString = this.getAaronHSuccessStory(); break;
      case "angie-t": htmlString = this.getAngieTSuccessStory(); break;
      case "belinda-s": htmlString = this.getBelindaSSuccessStory(); break;
      case "brandon-c": htmlString = this.getBrandonCSuccessStory(); break;
      case "carol-g": htmlString = this.getCarolGSuccessStory(); break;
      case "carolyne-r": htmlString = this.getCarolyneRSuccessStory(); break;
      case "chris-b": htmlString = this.getChrisBSuccessStory(); break;
      case "dr-david-n": htmlString = this.getDrDavidNSuccessStory(); break;
      case "emily-s": htmlString = this.getEmilySSuccessStory(); break;
      case "giovanni-r": htmlString = this.getGiovanniRSuccessStory(); break;
      case "glen-o": htmlString = this.getGlenOSuccessStory(); break;
      case "jennifer-anne-s": htmlString = this.getJenniferAnneSSuccessStory(); break;
      case "joe-m": htmlString = this.getJoeMSuccessStory(); break;
      case "kelly-ann-z": htmlString = this.getKellyAnnZSuccessStory(); break;
      case "mike-t": htmlString = this.getMikeTSuccessStory(); break;
      case "nils-m": htmlString = this.getNilsMSuccessStory(); break;
      case "dr-paul-b": htmlString = this.getDrPaulBSuccessStory(); break;
      case "richard-b": htmlString = this.getRichardBSuccessStory(); break;
      case "richard-r": htmlString = this.getRichardRSuccessStory(); break;
      case "shannon-k": htmlString = this.getShannonKSuccessStory(); break;
      // 2012
      case "angela-r": htmlString = this.getAngelaRSuccessStory(); break;
      case "craig-c": htmlString = this.getCraigCSuccessStory(); break;
      case "dr-victoria-t": htmlString = this.getDrVictoriaTSuccessStory(); break;
      case "elizabeth-m": htmlString = this.getElizabethMSuccessStory(); break;
      case "frank-p": htmlString = this.getFrankPSuccessStory(); break;
      case "leanne-k": htmlString = this.getLeanneKSuccessStory(); break;
      case "lois-l": htmlString = this.getLoisLSuccessStory(); break;
      case "miriam-b": htmlString = this.getMiriamBSuccessStory(); break;
      case "patricia-h": htmlString = this.getPatriciaHSuccessStory(); break;
      case "rebekah-h": htmlString = this.getRebekahHSuccessStory(); break;
      case "tiff-d": htmlString = this.getTiffDSuccessStory(); break;
      // 2011
      case "annie-s": htmlString = this.getAnnieSSuccessStory(); break;
      case "anthony-s": htmlString = this.getAnthonySSuccessStory(); break;
      case "gary-s": htmlString = this.getGarySSuccessStory(); break;
      case "jake-f": htmlString = this.getJakeFSuccessStory(); break;
      case "jessica-p": htmlString = this.getJessicaPSuccessStory(); break;
      case "jill-b": htmlString = this.getJillBSuccessStory(); break;
      case "joseph-p": htmlString = this.getJosephPSuccessStory(); break;
      case "lisa-w": htmlString = this.getLisaWSuccessStory(); break;
      case "liz-m": htmlString = this.getLizMSuccessStory(); break;
      case "marina-b": htmlString = this.getMarinaBSuccessStory(); break;
      case "nathan-f": htmlString = this.getNathanFSuccessStory(); break;
      case "pamela-m-and-kyle-s": htmlString = this.getPamelaMAndKyleSSuccessStory(); break;
      case "rhonda-o": htmlString = this.getRhondaOSuccessStory(); break;
      case "rick-k": htmlString = this.getRickKSuccessStory(); break;
      case "todd-w": htmlString = this.getToddWSuccessStory(); break;
      // 2010
      case "brian-r": htmlString = this.getBrianRSuccessStory(); break;
      case "eric-f": htmlString = this.getEricFSuccessStory(); break;
      case "geri-n": htmlString = this.getGeriNSuccessStory(); break;
      case "greg-and-loriann-w": htmlString = this.getGregAndLoriannWSuccessStory(); break;
      case "harley-d": htmlString = this.getHarleyDSuccessStory(); break;
      case "holly-d": htmlString = this.getHollyDSuccessStory(); break;
      case "james-p": htmlString = this.getJamesPSuccessStory(); break;
      case "jean-f": htmlString = this.getJeanFSuccessStory(); break;
      case "mary-a": htmlString = this.getMaryASuccessStory(); break;
      case "melanie-s": htmlString = this.getMelanieSSuccessStory(); break;
      case "mercedes-r": htmlString = this.getMercedesRSuccessStory(); break;
      case "michael-o": htmlString = this.getMichaelOSuccessStory(); break;
      case "michael-w": htmlString = this.getMichaelWSuccessStory(); break;
      case "oralia-a": htmlString = this.getOraliaASuccessStory(); break;
      case "patrick-d": htmlString = this.getPatrickDSuccessStory(); break;
      // 2009
      case "april-w": htmlString = this.getAprilWSuccessStory(); break;
      case "bill-and-keller-b": htmlString = this.getBillAndKellerBSuccessStory(); break;
      case "christina-k": htmlString = this.getChristinaKSuccessStory(); break;
      case "donovan-m": htmlString = this.getDonovanMSuccessStory(); break;
      case "dr-ken-s": htmlString = this.getDrKenSSuccessStory(); break;
      case "dr-todd-g": htmlString = this.getDrToddGSuccessStory(); break;
      case "jana-b": htmlString = this.getJanaBSuccessStory(); break;
      case "jason-v": htmlString = this.getJasonVSuccessStory(); break;
      case "jeff-m": htmlString = this.getJeffMSuccessStory(); break;
      case "leslie-h": htmlString = this.getLeslieHSuccessStory(); break;
      case "mark-d": htmlString = this.getMarkDSuccessStory(); break;
      case "melisa-s": htmlString = this.getMelisaSSuccessStory(); break;
      case "mike-h": htmlString = this.getMikeHSuccessStory(); break;
      case "robyn-c": htmlString = this.getRobynCSuccessStory(); break;
      case "sharon-b": htmlString = this.getSharonBSuccessStory(); break;
      case "ryan-r": htmlString = this.getRyanRSuccessStory(); break;
      // 2008
      case "anthony-d": htmlString = this.getAnthonyDSuccessStory(); break;
      case "bruce-and-theresa-c": htmlString = this.getBruceAndTheresaCSuccessStory(); break;
      case "ciera-w": htmlString = this.getCieraWSuccessStory(); break;
      case "derrek-s": htmlString = this.getDerrekSSuccessStory(); break;
      case "elaine-g": htmlString = this.getElaineGSuccessStory(); break;
      case "gary-m": htmlString = this.getGaryMSuccessStory(); break;
      case "jess-b": htmlString = this.getJessBSuccessStory(); break;
      case "joe-b": htmlString = this.getJoeBSuccessStory(); break;
      case "linda-o": htmlString = this.getLindaOSuccessStory(); break;
      case "lyndsay-and-cory-s": htmlString = this.getLyndsayAndCorySSuccessStory(); break;
      case "mary-p": htmlString = this.getMaryPSuccessStory(); break;
      case "matt-c": htmlString = this.getMattCSuccessStory(); break;
      case "michelle-p": htmlString = this.getMichellePSuccessStory(); break;
      case "mike-w": htmlString = this.getMikeWSuccessStory(); break;
      case "radha-b": htmlString = this.getRadhaBSuccessStory(); break;
      // 2007
      case "adam-v": htmlString = this.getAdamVSuccessStory(); break;
      case "daniel-m": htmlString = this.getDanielMSuccessStory(); break;
      case "david-g": htmlString = this.getDavidGSuccessStory(); break;
      case "david-w": htmlString = this.getDavidWSuccessStory(); break;
      case "derek-z": htmlString = this.getDerekZSuccessStory(); break;
      case "dina-m": htmlString = this.getDinaMSuccessStory(); break;
      case "donna-o": htmlString = this.getDonnaOSuccessStory(); break;
      case "eric-and-amber-h": htmlString = this.getSuccessEricAndAmberHStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAbilioVSuccessStory(): string {
    return `
    <h3>Retired U.S. Army Veteran and IsaBody Finalist is Always Up for a Challenge</h3>
    <p>
      Sixty-four-year-old Abilio admits, "I was dreaming about the day that I could fully retire throughout my career, and I should
      have been happy when it happened. But I found myself with more free time and not too much to do."
    </p>
    <p>
      The U.S. Army veteran had never been in this position before. Always busy, he first retired from the Army in 1991 after spending
      20 years in active duty. To keep him intellectually engaged, he continued to work and contracted for the U.S Department
      of Defense in Iraq and Afghanistan. He then retired once again in 2013.
    </p>
    <p>
      This free time left Abilio overindulging in his favorite fare with plenty of wine on the side. At 219 pounds, he was at the
      physical peak of mental boredom.
    </p>
    <p>
      "I started gaining more weight than my body and frame were able to handle, which started to affect my lower back," says Abilio.
      "I thought my better days were behind me and physical decline was all I could look forward to."
    </p>
    <p>
      Little did Abilio know that the willpower he had gained in the Army would get him back to the height of his health and put
      him on a fulfilling journey.
    </p>
    <h3>Isa… What?</h3>
    <p>
      "I was always tired and sluggish until someone said, ‘Party time!’" explains Abilio. "Then one day while visiting my nephews
      in Florida at the beginning of February 2014, my nephew said he was going to start on products called ‘Isagenix.’"
    </p>
    <p>
      Abilio didn’t know what that was or what it did, but when he returned to visit his nephew a few months later the name certainly
      stuck.
    </p>
    <p>
      "I saw the extraordinary change in physique, energy, and stamina level in my nephew," laughs Abilio. "So I immediately said,
      ‘I’m in! Let’s get started with Isagenix!’"
    </p>
    <p>
      The U.S. veteran ordered the 30-Day Cleansing and Fat Burning System and immediately felt the positive effects of the products.
      His daughter Sharon was impressed by the physical change in her father, and decided to join Isagenix too.
    </p>
    <p>
      Abilio is even close to his healthiest weight—180 pounds—from his days on active duty.* "From the beginning, I saw the IsaBody
      Challenge® as a way for me to stay focused on my goal."
    </p>
    <p>
      Today, Abilio is at 187 pounds,* and he’s certainly not stopping there. Instead, he’s found a deeper meaning in his healthy
      living after retirement—one he never imagined.
    </p>
    <p>
      "Although I reached my physical goals, I rediscovered passion in my life, my mind, my body, and my soul," explains Abilio.
      "I am no longer a 64-year-old dreaming of escape: There is no mountain too high to climb and I realize that my
      highest life purpose is to help others do the same with Isagenix."
    </p>`;
  }

  private getAmyOSuccessStory(): string {
    return `
    <h3>No More ‘Skirting’ Around the Issue: IsaBody Finalist Fits Back into High School Attire!</h3>
    <p>
      Amy is a natural nurturer. As a stay-at-home mother of two, she consistently cares for everyone in her family—immediate and
      extended—including volunteering her time to care for others as well.
    </p>
    <p>
      "One of my favorite people in the world, my aunt, was diagnosed with cancer," explains Amy. "I was fortunate enough to invite
      her into our home, so she lived with my family for a period where we did the chemo treatments, the radiation, and
      everything else with us by her side." During this time, Amy admits that everything else in her life took the backseat
      for a couple of years.
    </p>
    <p>
      "I was worried about caring for my aunt, my kids, my house, and my finances," says Amy. "I was simply overwhelmed from always
      taking care of everything and everyone."
    </p>
    <p>
      Unfortunately, Amy’s aunt—lovingly nicknamed Aunt "O"—passed away in August 2013. With all of the stress coming to a head
      with her aunt’s passing, Amy, at a petite 5"1’, was at 166 pounds… the heaviest she had ever been. And she wasn’t
      going to stand for it anymore.
    </p>
    <h3>No More Quick Fixes</h3>
    <p>
      After dabbling in several "quick fixes," Amy had noticed a pattern.
    </p>
    <p>
      "I would lose a little bit—15 pounds at the most—and then I’d gain it back. It was just a back-and-forth cycle," says Amy.
    </p>
    <p>
      In April 2014, she was browsing through her Facebook feed when she noticed a post from her friend about Isagenix. The post
      showed a picture of Isagenix products and read: "I’m looking to get fit this summer!" Amy wished for the same as
      her friend.
    </p>
    <p>
      But she wanted it for more than just a season.
    </p>
    <p>
      "To be honest, I hadn’t even thought about losing weight for a long time," admits Amy. "I had tried so many different things
      before that I didn’t want to screw up again."
    </p>
    <p>Amy channeled her inner detective and applied some research; she knew that if she did Isagenix and the IsaBody Challenge®
      it would keep her dedicated for the long haul.
    </p>
    <p>
      "I gave myself a simple ultimatum: If I do it and it works—great. And if it didn’t work, then that was it," shares Amy. "I
      was just going to let myself be and figured maybe this was the body I was supposed to have after having two kids."
    </p>
    <h3>Now That's Dedication</h3>
    <p>
      When her 30-Day Fat Burning and Cleansing System shipment arrived in May 2014, Amy didn’t know what to expect.
    </p>
    <p>
      "I figured the stuff was going to come, I was going to do the system, and it was going to be fine!" laughs Amy. "Well, I
      opened the box and there was shakes, cleanses, and so much more, and I thought, ‘Oh my goodness.’"
    </p>
    <p>
      OMG indeed. Amy was filled with such a staunch commitment that after she put her children to sleep that night, she stayed
      up until 4 a.m. reading the manuals cover to cover many times over.
    </p>
    <p>
      "That package had me pumped!" exclaims Amy. "I woke up three hours later and knew my life was going to change that day… I
      had made a schedule, highlighted an agenda, and immediately signed up for the IsaBody Challenge to hold me accountable."
    </p>
    <p>
      It worked. Today, Amy’s lost nine pant sizes and is now 115 pounds.*
    </p>
    <p>
      Her favorite part? She’s kept a skirt from high school and hung it outside her closet every day during the Challenge for
      inspiration. "I firmly believe with my whole heart that Isagenix gave me the power to get me back into that skirt,"
      shares Amy. "And I can’t wait to wear that skirt onstage!"
    </p>`;
  }

  private getAngelaFSuccessStory(): string {
    return `
    <h3>Cosmetologist Makes Lifestyle Change that Sticks</h3>
    <p>
      Angela was raised in a southern community where weight loss, exercise, and watching portions was not a priority. Food was
      celebrated and it was always at the center of any gathering, which made it hard for Angela to maintain healthy
      habits. When the South Carolina resident agreed to try Isagenix four years ago, little did she know she would make
      a lifestyle change for good.
    </p>
    <p>
      "At the time I was tired and working long hours as a cosmetologist," says Angela. "My nutrition was bad and I had about 50
      pounds that needed to come off. I felt depleted and disconnected. I was willing to try anything because I just
      wanted to feel better."
    </p>
    <p>
      After her initial 9-Day Deep Cleansing and Fat Burning System, Angela released weight and felt energized. The 53-year-old
      signed up for the IsaBody Challenge to stay committed to losing weight the healthy way. The support she got from
      the Challenge made her feel for the first time in her life that she wasn’t alone in her weight-loss journey.
    </p>
    <h3>On The Right Side of 50</h3>
    <p>
      Angela has successfully completed four IsaBody Challenges, released a total of 45 pounds,* and transformed herself on so
      many levels. The personal development and growth she’s experienced has helped her get through menopause, and cope
      with her daughter Esprit growing up and moving out. She was finally able to let go of the negative mindset that
      had weighed her down for so long. She no longer thinks twice about making healthy choices.
    </p>
    <p>
      Currently in her fifth Challenge, Angela has been in maintenance mode since the fourth Challenge. The 53-year-old is holding
      onto muscle mass and keeping her weight down doing a mix of cardio, weight training, yoga and tai chi every day.
      To power her workouts and keep her going during long work days, the cosmetologist relies on IsaLean® Pro, Ageless
      Essentials™ with Product B® IsaGenesis®, Ionix® Supreme and one Cleanse Day every week.
    </p>
    <p>
      "Maintenance is easy because Isagenix is not a diet, it’s a lifestyle," says Angela. "When you make better food choices,
      you make better life choices. I fully understand that whatever I do or don’t do now is going to show up in the
      next five to 10 years in terms of my physical, mental, and emotional health."
    </p>
    <h3>A Woman on a Mission</h3>
    <p>
      The transformation she experienced with Isagenix has revealed a new mission for Angela. The hairdresser of more than 30 years
      is now ready to help women realize the possibilities in front of them and create a financial legacy through her
      Isagenix business, which she’s named Fuller Lifestyle.
    </p>
    <p>
      "I’m embracing the growth that comes with challenging myself physically, mentally, emotionally, and financially," says Angela,
      who credits her supportive husband Ron for easing her journey. This is not just for show or to win prizes or look
      physically different. Isagenix truly is a vehicle for transforming lives."
    </p>`;
  }

  private getBillyASuccessStory(): string {
    return `
    <h3>Firefighter Discovers Another Way to Serve Others</h3>
    <p>
      At 55 years old, Billy is in prime physical shape. While decades as a firefighter have impacted his physicality, he believes
      Isagenix is ultimately responsible for his ability to stay young and effective in the force.
    </p>
    <p>
      Billy served as a firefighter in New Mexico for 25 years. After retiring in his mid-forties, he quickly changed his mind,
      and rejoined a firefighting team in Arizona, where he continues to serve now.
    </p>
    <p>
      "I missed the service so much," remembers Billy. "I missed helping people. I had this empty feeling in my heart and felt
      that I wasn’t doing enough for people. So, I decided to get back in the service."
    </p>
    <h3>Not Accepting Defeat</h3>
    <p>
      Years later, the combination of four knee surgeries, a hernia, and a torn rotator cuff and bicep threatened to end Billy’s
      firefighting career for good. Following his last injury, his doctor said Billy would require a 10-14 month healing
      time, and that he may not fully recover.
    </p>
    <p>
      Not only did his injuries slow him down, but Billy also knew that statistically, firemen live only five to seven years after
      retirement. Fortunately, Billy’s son and 2014 IsaBody Challenge® Finalist, Will, encouraged Billy to try Isagenix
      to aid his recovery and improve his lifestyle. Billy knew that losing weight would help his body heal quicker,
      so he began Isagenix in February of 2014.
    </p>
    <p>
      "I’m not going to be in those statistics because of the way my health is now. The whole Isagenix program helped me so much
      in transforming my health," he says. Not only did Billy’s healthy habits help him recover from surgery in only
      seven months, he was able to return to his profession and once again serve as a vital member of the Scottsdale
      Fire Department.
    </p>
    <h3>The Power of Saving Lives</h3>
    <p>
      Nearly a year later, Billy decided to continue his Isagenix journey and join the IsaBody Challenge. He lost 37 pounds* during
      the Challenge and feels stronger than ever.
    </p>
    <p>
      "Looking good is a side effect of Isagenix. The main point of the products is that they help you feel good and live a healthy
      lifestyle. I want to show people that you can do this at any age if you put in the work. The only thing stopping
      you is you," shares Billy. Billy didn’t just hope to get his body back in prime shape, the main reason he kept
      going even during the difficult days came down to his desire to save lives.
    </p>
    <p>
      "I’ve always had the mindset that if I’m not in the best shape to save somebody’s life, I should not be a fireman, because
      I owe the people that."
    </p>
    <h3>Spreading the Good News</h3>
    <p>
      Now, Billy is in the best shape to transform lives as a fireman and also as an Isagenix Associate. His goal is to eventually
      retire from a respectable firefighting career and go full time with Isagenix.
    </p>
    <p>
      "As a firefighter, often we help people when it’s already almost too late," says Billy. "I see so many people out of shape.
      Many of them even have diabetes and high blood pressure. Now, I can help them before that."
    </p>
    <p>
      The always positive husband and father of two embodies what it is to be an IsaBody Challenge Finalist. His physical transformation
      was only the beginning, and now Billy hopes to "spread the good news" and move others—including his fellow firefighting
      team—to begin their own change.
    </p>
    <p>
      "You don’t want to just be alive. You want to be living," shares Billy. "Let’s live our lives to the fullest into our 70s,
      80s, and 90s."
    </p>
    <p>
      For more IsaBody success stories, visit IsaFYI.com.
    </p>
    <h3>
      Billy’s IsaBody Challenge Strategies:
    </h3>
    <ul>
      <li>Take it one day at a time. Today will end, and you’ll always have tomorrow to improve yourself.</li>
      <li>Be positive. Wake up in the morning happy and ready to make a change.</li>
      <li>Reach out to your teammates for support. That’s what gets you through it. Don’t do it by yourself; we’re here to
        help you.</li>
      <li>Be a product of the product. That’s what helps people believe Isagenix works.</li>
    </ul>`;
  }

  private getCaylenWSuccessStory(): string {
    return `
    <h3>Hockey Player Gets Back on the Ice with Isagenix</h3>
    <p>
      Two years into college, everything looked great for hockey defenseman Caylen W. The long-time athlete began playing hockey
      at age four, was enjoying a hockey scholarship at the University of Vermont, and looking forward to a promising
      professional career.
    </p>
    <h3>Starting Over</h3>
    <p>
      "I thought I had my world made for me going pro, then in the blink of an eye, I lost everything," he remembers.
    </p>
    <p>
      A blow to the arm led to a hyperextended elbow, nearly tearing all of the ligaments and tendons. After six weeks of rehab,
      it was evident that his athletic abilities weren’t the same. Shortly thereafter, Caylen’s coach suggested he "move
      on."
    </p>
    <p>
      Following a failed attempt at the pros due to the injury, he returned to his home in Alberta, Canada and "shut down completely."
      Weeks went by and Caylen started to feel upset with how he looked and felt. He had lost his athletic build and
      was tired, sluggish, and depressed.
    </p>
    <p>
      Deciding to get his body back in check, he reached out to his friend Joel, who introduced him to Isagenix. Caylen decided
      then to join the IsaBody Challenge® and never looked back.
    </p>
    <p>
      "It was one of the best decisions I’ve ever made," he says. "As the days went on, I saw results that no other products have
      ever given me. Isagenix completely blew out anything I’d ever tried before."
    </p>
    <h3>'Go Time'</h3>
    <p>
      He credits a huge part of his Challenge success to the endless support from friends, family, the START group, and the IsaBody
      Challenge team. In fact, one of the highlights of his journey was when START Founder and Vice President of Global
      Field Development Erik Coover commented on his pictures, telling him how great he looked.
    </p>
    <p>
      "It was ‘go time’ right then," recalls Caylen. "I knew I was going to make the best of this."
    </p>
    <p>
      And make the most of it he did. The 23-year-old completely transformed his body. He lost 28 pounds,* while building a solid
      muscular physique that he says is better than ever before.
    </p>
    <p>
      As an athlete, Caylen knows meeting his body’s nutritional demands are crucial. For that reason, he never goes without his
      IsaLean® PRO Shake mixed with Isagenix Greens™ and Ionix® Supreme. He also adds IsaPro® to his nutrition regimen
      for a protein boost.
    </p>
    <p>
      "As an athlete, you want extra protein, because you go a lot harder in the gym," Caylen explains. "Since putting on lean
      muscle, I also feel a lot faster and lighter on my feet when I’m skating."
    </p>
    <h3>Full Circle</h3>
    <p>
      Caylen’s next milestone came two days before the end of the Challenge. He was accepted to the University of Calgary, and
      shortly after, he received a call from the head coach of the University’s hockey team asking if he’d play for them,
      which of course, he enthusiastically accepted.
    </p>
    <p>
      "It’s funny how things come full circle," Caylen says. "What I least expected was how the IsaBody Challenge would turn out
      to be the most intense personal development course I have ever been through!"
    </p>
    <p>
      Caylen has brought others, including his younger sister, into the Isagenix family as well. He is looking forward to attending
      college and sharing Isagenix with others.
    </p>
    <p>
      "Anytime I can help somebody, it’s one of the best feelings in the world," he shares.
    </p>
    <p>
      Now, Caylen’s hockey future seems promising, and his Isagenix career just as much. The START member looks forward to excelling
      in the START group as he grows his Isagenix business.
    </p>
    <p>
      His biggest tip? For those who may feel Isagenix may be too expensive for their lifestyle, Caylen says think again.
    </p>
    <p>
      "Don’t shy out on the price. When I came home, I was broke and I was able to make it work. Know that if you get just two
      people on the products, you’re on your way. There’s always that one bill that’s tough to pay off, and Isagenix
      can really help out."
    </p>`;
  }

  private getEllenCSuccessStory(): string {
    return `
    <h3>PE Teacher Reclaims Health and Becomes Powerful Role Model</h3>
    <p>
      For so long Ellen was trapped in a 296-pound body that made her feel ashamed. As an elementary physical education teacher,
      she struggled demonstrating basic skills to her students. Fueling her shame were daily struggles like crossing
      her legs, climbing the stairs, buckling a seatbelt on an airplane or feeling her daughter’s arms wrapped fully
      around her for a hug.
    </p>
    <p>
      "I had guilt about the time I wasted watching TV and the money I spent eating junk food," says Ellen. "I felt like a lazy
      mom, withdrawn wife, absent friend and hypocritical teacher. I had lost all hope of living the life I desired for
      myself and my family."
    </p>
    <h3>Mission to Reclaim Health</h3>
    <p>
      Ellen discovered Isagenix through her sister-in-law, Allison, who arranged a meeting with Life Coach and Personal Trainer,
      Susan. Both women were convinced that Isagenix was the right solution. Shortly after that fateful meeting, Ellen
      found in her mailbox what she believed was a sign to take action and she began her Isagenix journey.
    </p>
    <p>
      "My mission was to reclaim my health," shares Ellen. "I became determined to make a change and not accept the destiny of
      dying young like my brother who passed away from morbid obesity at age 39."
    </p>
    <p>
      Staying true to her mission, Ellen complemented her Isagenix nutrition plan by working out twice a week with her trainer
      and doing high-intensity interval training and fitness dance classes on her own.
    </p>
    <p>
      Her biggest struggle was the temptation of falling back on her old habits of emotional eating. She powered through with mental
      focus, determination, and having fun with the products. She even came up with her own special concoction called
      Ellen’s Energizer: a packet of Greens™, IsaFruits®, Ionix® Supreme and Lemon Lime Replenish™.
    </p>
    <p>
      Just a few days before beginning her second 30-Day Cleansing and Fat Burning System, Ellen signed up for her first IsaBody
      Challenge®. She grappled with the insecurity of people seeing her photos. "My trainer kept encouraging and pushing,
      but it took me releasing 25 pounds* to muster up the courage to take my first ‘before’ picture."
    </p>
    <h3>A Role Model for Her Students</h3>
    <p>
      These days Ellen isn’t shy about showing off her newfound strength, confidence, and 136-pound* weight loss. Her highlight
      reel includes running her first 5K, training for a half-marathon, celebrating her entry into the 100-Pound Club
      and showing her students how a real pushup is done. She isn’t stopping there. She’s already signed up for her third
      Challenge.
    </p>
    <p>
      "It feels amazing to inspire my students to be active and healthy through my actions,” says Ellen. "I was a collegiate athlete
      and my drive, athleticism, and competitiveness have resurfaced. It’s great to have that identity back."
    </p>
    <p>
      Ellen’s journey took her from feeling lonely and isolated to leading an active, healthy life full of friends and Associates
      who continue to teach her about the power of belief.
    </p>`;
  }

  private getJamesBSuccessStory(): string {
    return `
    <h3>IsaBody Finalist Says Adios to ‘Muffin Top’</h3>
    <p>
      "My parents were workaholics," describes 41-year-old James. "I was taught that in order to get ahead you had to put in more
      hours at your job which meant, unfortunately, more time away from the family."
    </p>
    <p>
      After James graduated from college with a degree in law and security, he quickly realized there were no careers available
      in that position in New Lowell, Ontario, where he and his family settled.
    </p>
    <p>
      "I fell into the electrical field through my wife and have been successful in operating my own company and managing eight
      employees for 10 years," explains James.
    </p>
    <p>
      James was on what he called "the tradesman diet." "My eating lifestyle included waking up in the morning, having a breakfast
      sandwich, and then getting home at 10 and having a smorgasbord of leftovers from suppers… and that was pretty much
      it."
    </p>
    <p>
      As he built his business, he spent much of his time driving all over town and overseeing his employees’ projects. James started
      slowly gaining weight which catapulted when he tore his ACL while playing soccer in 2011.
    </p>
    <p>
      Out of physical commission, the pounds started packing on. "I put on an additional ten pounds," describes the 5’7" Ontario
      native who was then 180 pounds. "It was honestly my daughter who gave me the motivation to lose weight."
    </p>
    <h3>The ‘Muffin Top’ Song</h3>
    <p>
      James is clearly dedicated to his family. Watching them succeed is his No. 1 priority, and he’s willing to do anything to
      provide for his wife, 15-year-old and 13-year-old daughters, and 9-year-old son.
    </p>
    <p>
      "My oldest daughter had this song on her cell phone called ‘The Muffin Top’ song," laughs James. "So every time I would take
      my shirt off, she would put on this ‘Muffin Top’ song, and I think that was the defining moment. Even though it
      sounds cruel, she’d say, ‘Dad, you’re kind of fat…’"
    </p>
    <p>
      It was an eye-opener for James — and with the support of his wife, — he decided not to let his injury, work, and yes, even
      "The Muffin Top" song get the best of him.
    </p>
    <p>
      "A box showed up at the door, and my wife simply said, ‘We’re going to do Isagenix together.’ So of course I had to prove
      her wrong."
    </p>
    <p>
      Simply put, his wife won. James’ energy went through the roof, he lost the weight, and went from a 34" waist to 31.*
    </p>
    <h3>Representing Tradesmen</h3>
    <p>
      "When you’ve been in the trade for 20 some odd years, you really feel your body start to get sore after a hard day’s work,"
      explains James. "I saw the IsaBody Challenge® as a chance to represent tradesmen who were missing out on the great
      feeling that these products gave you after those long days."
    </p>
    <p>
      James originally got into the Challenge, he admits, for the guarantee of receiving $200 worth of products once he completed
      the Challenge. But his willpower and results behind the Challenge were, clearly, astonishing.
    </p>
    <p>
      "I started to get abs and that was huge for me!" exclaims James. "I’d never had abs before and I’d done everything I could
      before, but I never could get that sculpt. I feel fitter now in my 40s than when I was working out every day in
      my 20s. Even the guys at the gym were saying, ‘You’re really shredding down. What are you using?’"
    </p>
    <p>
      James was more than glad to share Isagenix products with his crew.
    </p>
    <p>
      "I was a nobody before, and all of a sudden I’m starting to get cut and even lift heavier weights," says James—which was
      a huge surprise to his wife. "She always said I was the strongest little guy she’s ever known… the ability to lift
      strong, made me feel better every time I lifted—that blows my mind!"
    </p>
    <p>
      With the IsaBody Challenge empowering the change in his body and attitude, James is also rethinking about the legacy he would
      like to leave to his children.
    </p>
    <p>
      "I just want to prove to my children that once you set a goal—that if you set your mind to something and really put it out
      there—and see it all the way through then you’ve done something amazing," he shares. "Isagenix has given me the
      ability to actually dream and give 100 percent at everything—my Isagenix business, selling the products, fueling
      myself with energy– everything!"
    </p>`;
  }

  private getJesseJSuccessStory(): string {
    return `
    <h3>Busy Father Gains the Mind and Body of a Competitor</h3>
    <p>
      Jesse has never been stronger mentally or physically, and after completing back-to-back IsaBody® Challenges, he’s now the
      guy at the gym everyone is watching. The father of three has managed to get his health and body in top form despite
      a super busy schedule acting as public safety chief for the local airport, running his family’s all-natural vegetable
      farm, and keeping up with three young kids.
    </p>
    <p>
      "Whenever I see myself in the mirror I have a slight moment of panic because I hardly recognize the image in front of me,"
      shares Jesse. "I continue to see new muscles forming, my body fat decreasing, and my energy increasing."
    </p>
    <h3>From Stressed to Ripped</h3>
    <p>
      "I let stress take over and felt my life being taken away from me one day at a time," shares Jesse. "I decided I was done
      feeling sorry for myself and that Isagenix would be my new beginning."
    </p>
    <p>
      The Montana resident’s hectic life kept him from working out as much as he liked, but after getting noticeable results from
      just using the products, Jesse signed up for his first IsaBody Challenge. He wanted to ensure that his busy schedule
      would not sabotage his new healthy lifestyle.
    </p>
    <p>
      The Challenge was instrumental in helping him set goals, then keeping him disciplined and motivated to follow through. At
      the end of 16 weeks, Jesse felt energized after releasing 26 pounds.* He was ecstatic over the positive changes
      in such a short time and finally felt like he was getting his life back.
    </p>
    <p>
      Riding high on his results and the momentum of his family and friends cheering him on, Jesse signed up for his second IsaBody
      Challenge with a goal to compete in a physique competition.
    </p>
    <p>
      "I switched from the Weight Loss President’s Pak to the 30-Day Cleansing and Fat Burning System with IsaLean® PRO to gain
      lean body mass," says Jesse. "My go-to now is the Athlete’s Pak. I do three IsaLean PRO shakes a day and two scoops
      of IsaPro® after a workout and before bed. I also cleanse twice a week."
    </p>
    <p>
      After the second Challenge, Jesse released 7 pounds of fat, gained 2 pounds of lean muscle, and was down to an impressive
      9% body fat from 28%.*
    </p>
    <p>
      The 33-year-old was rewarded for all his hard work with a third-place finish in his first-ever physique competition. The
      results qualified Jesse to compete on a national level and he plans to keep training and competing, an integral
      part of his life.
    </p>
    <p>
      "It was a lot of fun and it’s great motivation to stay healthy. Plus, Isagenix makes it easy," says Jesse. "A lot of other
      competitors were riding highs and lows in their energy but I felt great through the whole competition."
    </p>
    <h3>The Promise of Tomorrow</h3>
    <p>
      Jesse’s commitment to the Isagenix lifestyle has given him back his health and renewed his confidence. It’s hard to believe
      he was once a tired, stressed, and frumpy dad. The happy husband and energetic father you see today looks forward
      to playing with his kids and seeing a big smile on his wife’s face because he is once again an active member in
      his family life.
    </p>
    <p>
      "I’m in a great place physically and more importantly, mentally," says Jesse. "I look forward to my third IsaBody Challenge
      and what tomorrow will bring."
    </p>`;
  }

  private getJohnMSuccessStory(): string {
    return `
    <h3>Baby Boomer Energized by Isagenix Transformation</h3>
    <p>
      At 60, John is in the best shape of his life and ready to tackle the world. A natural go-getter, the railroad conductor and
      professional drummer lives a very active lifestyle filled with skiing, working out, running after his grandkids
      and playing in his classic rock, folk/rock, and jazz bands.
    </p>
    <p>
      On top of all of his hobbies, John works a physically demanding job as a conductor and also serves on the safety board and
      union for the railroad. But it’s this natural inclination to do more that finally got the best of him.
    </p>
    <p>
      "Being single, I just like to be active because it keeps me going," says John. "But I was getting sluggish, tired, and gaining
      weight. It took major effort for me to maintain all the activities I wanted."
    </p>
    <p>
      The Baby Boomer decided to give Isagenix a try after seeing fellow musician and 2009 IsaBody Finalist, Mike H., release several
      pounds after using the Isagenix systems. But he didn’t get serious about his health until he had officially reached
      burnout and depression set in. He committed to his first IsaBody Challenge as an extra push to feel focused and
      on track.
    </p>
    <p>
      "I took off 25 pounds* and felt energized," says John. "Cleansing was a big factor for me. Now I look forward to Cleanse
      Days because I know how I’m going to feel the next day."
    </p>
    <p>
      John was so happy with his initial success that he dove in to a second IsaBody Challenge. Although he suffered a back injury
      halfway through that left him unable to exercise properly, he was able to maintain his weight by increasing his
      Cleanse Days. He succeeded in finishing the Challenge and winning an Honorable Mention along the way
    </p>
    <h3>Youthful Aging Powered by Isagenix</h3>
    <p>
      While many of his peers are experiencing a decline in activity and health, John is at the top of his fitness game after completing
      four IsaBody Challenges. The 60-year old credits the addition of the Isagenix Brain and Sleep Support System and
      Ageless Essentials™ with Product B® IsaGenesis® to his Isagenix routine for his improved performance in the gym
      and behind the drums.
    </p>
    <p>
      "I truly believe that taking these products together has brought me to another level," says John. "I’m down to a size 32*
      and in the best shape ever."
    </p>
    <h3>Broadcasting Isagenix</h3>
    <p>
      John is looking forward to his retirement from the railroad this year to pursue his Isagenix business full time. The active
      single is committed to reaching Executive by Celebration 2015 and he plans to do it with meetings and Launch Parties
      targeting his peers.
    </p>
    <p>
      "I really want to let other Baby Boomers know that Isagenix is a great opportunity," says John. "If you’re looking to get
      in shape and stay young, as far as I’m concerned, this is the ultimate system that will take you there."
    </p>`;
  }

  private getKathyPSuccessStory(): string {
    return `
    <h3>Caregiver Proves Healthy Aging Plays a Pivotal Role Later in Life</h3>
    <p>
      At 53 years young, Kathy is happily married living in Hawaii. She and her husband honeymooned on the island of Kauai, fell
      in love with everything about it, and decided to call "paradise" home.
    </p>
    <p>
      They work together at a local assisted living community in an effort to give back. Kathy’s titles range from Joy Specialist
      to Happiness Facilitator to Social Butterfly – she likes to keep it fun for the residents, and considers them her
      family. She is the Business Office Manager. "But, we had fallen into a rut at home." recalls Kathy. "We were enjoying
      sitting back, relaxing, eating the wrong foods, and watching TV a little too much. We were not getting out and
      enjoying the island."
    </p>
    <p>
      It wasn’t until Kathy turned 50 that she decided to embark on an exercise regimen and lose weight.
    </p>
    <h3>Age is Just a Number</h3>
    <p>
      "From age 50 to 51, I was frustrated," shares Kathy. "Nothing worked. I had become an expert at not losing weight on numerous
      weight-loss programs."
    </p>
    <p>
      Then her yoga instructor shared Isagenix and the benefits behind the products.
    </p>
    <p>
      "She also encouraged me to take a few "before" pictures, to document my journey and upload them into the Challenge," says
      Kathy, "which I really did not understand. But I was so focused, I trusted her and did what she said."
    </p>
    <p>
      With an increasing number of failed weight-loss programs under her belt, Kathy was open-minded and seeking solutions.
    </p>
    <p>
      "When I saw my initial ‘before’ pictures I started to cry," remembers Kathy.
    </p>
    <p>
      "They instantly became my motivation to get healthier. Anyone who thinks they don’t need to take a ‘before’ picture should
      think again. It could be the game-changer you need."
    </p>
    <p>
      Within three days of being on the 30-Day Cleansing and Fat Burning System, Kathy started to feel better, inside and out.
    </p>
    <h3>Third Time’s a Charm</h3>
    <p>
      That was three Challenges ago. Her incredible transformation has even been pictured in the 2013 and 2014 IsaBody™ Look Books.
    </p>
    <p>
      "I lost 28 pounds* during my first Challenge," says Kathy. "I was happy. I thought I was finished, so I considered myself
      in maintenance." But something strange happened. Before she could sign up for her second Challenge she shed an
      additional 11 pounds,* taking her slim 5’2" physique down to a toned 114 pounds. At the end of her second Challenge
      she dropped 3 additional pounds* for a final weight of 111 lbs. Then the third Challenge made it all so rewarding
      by being selected as a finalist before the end of the year. "I don’t use a scale often," admits Kathy. "I rely
      on how my clothes fit and how I feel."
    </p>
    <p>
      The regimen that brought her success? Two shakes a day…unless she is running late, then Kathy reaches for an IsaLean Bar.
    </p>
    <p>
      "I easily integrated Isagenix into my life. I was of the mindset that this was for life, so I wrapped my head around the
      concepts, and it worked!"
    </p>
    <h3>Forging Forward</h3>
    <p>
      Kathy recently signed up for her fourth Challenge. Her goal: Build more lean muscle.
    </p>
    <p>
      "I see firsthand, every day, how things are for the elderly folks who took care of themselves. They are leading active, vital
      lives, and I want that kind of healthy aging for me," says Kathy.
    </p>
    <p>
      Overall, Kathy has lost 39 pounds* and 40 inches* since starting her Isagenix journey.
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Stay focused. Find the balance between good nutrition and exercise and you’ll do it forever.</li>
      <li>Live a little. Just get back on track after you are done celebrating!</li>
      <li>Skip the scale. It’s not important!</li>
      <li>Be helpful and kind. It will keep you young.</li>
    </ul>
    <h3>Kathy's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro (Natural Vanilla)</li>
      <li>Ionix® Supreme</li>
      <li>IsaDelights (Milk Chocolate)</li>
      <li>IsaLean® Bars (Nutty Caramel Cashew)</li>
    </ul>`;
  }

  private getKelliESuccessStory(): string {
    return `
    <h3>Former Pro Fitness Competitor Gets Her Pre-Baby Body Back</h3>
    <p>
      Two years ago, if someone had shown Kelli her "before" photo from the beginning of her 2015 IsaBody Challenge®, she would
      never have believed it. She was in top shape as an elite fitness competitor and had recently received her pro card.
    </p>
    <h3>Adjusting to Motherhood</h3>
    <p>
      When Kelli became pregnant with her first baby last year, she ended up gaining nearly 50 pounds. Even after giving birth,
      she retained much of the weight.
    </p>
    <p>
      "I understand why people are comfortable with where they’re at after having a baby," says the 29-year-old mother. "As a new
      parent, you don’t care about how you look, because everything is about the baby and you want to spend every moment
      you can with them."
    </p>
    <p>
      As the days went by, the Wisconsin-native began to feel down on herself and was too embarrassed to go back to the gym where
      everyone had known her during her fitness prime.
    </p>
    <p>
      In February 2015, four months after giving birth, Kelli decided that she couldn’t take it anymore. She "kicked it into gear"
      and joined the IsaBody Challenge. Her goal was to get her body back, not only for herself, but for her son as well.
    </p>
    <p>
      "I knew the only way I was going to be happy with myself and be a better mom was to have my confidence back," she remembers.Putting
      in the Time
    </p>
    <p>
      The new mother worked hard and got back into her gym routine.
    </p>
    <p>
      "I thought, ‘I’m going to get there, and I’m going to see the results. It’s just going to take time,’" Kelli recalls. And
      she was willing to put in that time.
    </p>
    <p>
      Within a few weeks, she started to notice her progress, empowering her to finish strong. Her fiancé, Jesse, stood by her
      side, successfully completing his own Challenge. Kelli felt a great deal of support during her transformation and
      now enjoys a body that rivals her former fitness competitor physique.
    </p>
    <p>
      "The biggest part of Isagenix is the positive people that are involved in the company," shares Kelli. "It’s amazing to me."
    </p>
    <h3>Reaching Goals</h3>
    <p>
      No longer confined to maternity jeans, Kelli comfortably wears her size 2 skinny jeans and feels that her stamina has greatly
      improved. This fall, she is hoping to compete in her first fitness competition since having her son.
    </p>
    <p>
      Kelli doesn’t let a day go by without properly nourishing her body. Specifically, she enjoys Ageless Essentials™ with Product
      B® IsaGenesis®, Ionix® Supreme, and nightly shots of Cleanse for Life®.
    </p>
    <p>
      One of her biggest tips for losing weight is to have a proper eating routine. "I never skip breakfast or dinner," she says.
      "I eat a shake, a bar, or other snacks or meals every three hours to build my metabolism."
    </p>
    <p>
      Kelli’s ultimate goal is to one day own a gym with her soon-to-be husband. She is in the process of getting her personal
      training certification so she can help others improve their fitness and nutrition as well.
    </p>
    <p>
      "I’ve had so many positive responses to everything that I’ve done," she says. "I want to be able to help others reach their
      goals as well."For more IsaBody success stories like Kelli’s.
    </p>`;
  }

  private getMichaelLSuccessStory(): string {
    return `
    <h3>Father of Three Challenges Himself, Becomes an Inspiration to His Children</h3>
    <p>
      While facing unemployment and back surgery, Illinois-native Michael L. had lost hope. His nutrition was poor, he was overweight,
      and he had no energy for himself or his family.
    </p>
    <p>
      His trying situation came to a point where simply waking up in the morning seemed meaningless. "I couldn’t think of anything
      I had done to make the world a better place," remembers Michael. "I knew people counted on me, but I couldn’t be
      counted on."
    </p>
    <h3>A Life-Changing Decision</h3>
    <p>
      When Michael’s friend introduced him to Isagenix six weeks after his back surgery, his outlook was bleak. Michael turned
      it down, instead focusing on simply trying to get by. During his recovery, he realized his life was spinning out
      of control. Then, nearly six months later, Michael was introduced to Isagenix again. This time, it was his massage
      therapist who encouraged him to give the products a try.
    </p>
    <p>
      "Here were two different people who didn’t know each other but were both telling me the same story," he recalls.
    </p>
    <p>
      Praying this would be the change he desperately needed, Michael made the decision to try Isagenix.
    </p>
    <p>
      "I know September 4, 2014 is the day my life changed forever," tells Michael. "I knew four days into the program that it
      was different. I had more energy, and soon I began losing weight. I didn’t believe it at first."
    </p>
    <h3>Continual Progress</h3>
    <p>
      Even before he started working out, Michael lost 30 pounds* with his improved nutrition. He had started living the healthy
      lifestyle he’d always wanted. Suddenly full of energy and passion, he began to share Isagenix with everyone he
      could, including his wife and children. He was so encouraged by his success that he wanted to further his progress.
      "I thought, ‘if I’m going to talk the talk, I have to walk the walk.’ So I decided to join the IsaBody Challenge."
    </p>
    <p>
      During those 16 weeks, Michael lost an additional 21 pounds* and established an exercise routine that helped him achieve
      a stunning, chiseled physique.
    </p>
    <p>
      Michael was not the only one impressed by his results. His children watched as their dad became an even greater role model
      and a more involved parent.
    </p>
    <p>
      "This was the first time I can recall as a parent that I led by example," recalls Michael. "My son wrote a Facebook post
      saying, ‘Dad, you inspire me.’ I started crying right in the middle of the gym when I read it."
    </p>
    <p>
      Inspired by their father’s newfound resolve for health and wellness, two of his children quickly began using Isagenix products
      and have had their own amazing results. In fact, his daughter is currently building her business while attending
      college. Recently, Michael’s other son began his own Isagenix journey as well. Michael feels his proudest accomplishment
      is that of his family’s experience with Isagenix. Not only do his children share his passion, but he has also brought
      his wife and 80-year-old mother on board.
    </p>
    <h3>Reaching Out</h3>
    <p>
      During his Challenge, Michael took advice from the Isagenix pros, including 2014 IsaBody Challenge Grand Prize Winner Amyra
      Mondon. Specifically, Michael followed one of Amyra’s tips to hire a professional trainer. He also learned workout
      tips from coaches at Savage Fitness.
    </p>
    <p>
      With the support of his family, friends, and fellow Isagenix Associates, Michael looks and feels better than ever.
    </p>
    <p>
      "This is what I should have felt like in my twenties," shares Michael. "I feel like I’ve gained another chance. It’s a lot
      of fun!"
    </p>
    <p>
      Not stopping there, Michael now knows his newfound title of IsaBody Challenge Finalist will help further his ability to share
      Isagenix with everyone.
    </p>
    <p>
      "My passion is to help people get healthy," he says. "I feel great and other people should feel the same way. I know now
      that I am making a difference."
    </p>`;
  }

  private getNatalieHSuccessStory(): string {
    return `
    <h3>Mom Now the Best Version of Herself</h3>
    <p>
      Before being introduced to Isagenix by a friend, Natalie was overweight and uncomfortable in her own skin. It seemed everything
      she was taught as a competitive athlete was not working anymore. Adding to her frustrations was the photography
      business she started so she could stay home with her son.
    </p>
    <p>
      "My business was floundering and it was taxing my relationship with my ever-supportive husband," shares Natalie. "I was feeling
      like a failure as a mom, like a wife with no zest for life, and a partner with no financial contribution."
    </p>
    <p>
      Desperate for change, Natalie took a chance and purchased her first box of Isagenix products with a credit card. After a
      couple weeks she already felt better. After a short period of time, she was already down 12 pounds and 19 inches.*
      She used the IsaBody Challenge to see what she could accomplish in 16 weeks.
    </p>
    <p>
      "The Challenge provided me the support to stay accountable. I could plug in my results and see weight getting lower and the
      inches getting smaller," shares Natalie. "And the $200 worth of free products is such a great incentive."
    </p>
    <h3>A Sparkling Red Celebration</h3>
    <p>
      The culmination of Natalie’s year-long Isagenix journey happened onstage in a sparkling red bikini. She slimmed down 46 pounds
      with back-to-back Challenges, the 31-year-old mother fulfilled her dream of competing in a bikini competition.
      At the end of it all, she’d lost 49 pounds,* 53 inches, and 15% body fat.*
    </p>
    <p>
      Natalie’s goal was to be the absolute best version of herself. Following the guidance of her friend, fitness coach, and Isagenix
      Millionaire Cathy, this first-time competitor switched her focus from weight loss to energy and performance.
    </p>
    <p>
      "I utilized the IsaLean® Shakes, IsaLean® Pro and IsaPro® as I prepared for the stage. I am so grateful for these incredible
      products. I’m in a size that I have NEVER been as an adult and I feel healthier and sexier at 31 than I did at
      21," declares the 2015 IsaBody Challenge Top Achievers Finalist.
    </p>
    <h3>New Body Leads to Booming Business</h3>
    <p>
      The bikini competition and dramatic transformation pictures from the IsaBody Challenge has flooded Natalie’s inbox with messages
      from people who want to know her secret.
    </p>
    <p>
      "The secret is, there is no secret," says Natalie. "I had wall-kicking moments and days where I wanted to throw in the towel.
      But I was dedicated to creating healthy habits and sharing my story. This is a lifestyle commitment and if you
      follow the system Isagenix has laid out, it works."
    </p>
    <p>
      Now that she’s reached her ultimate fitness goal, Natalie is now excited about the prospect of having a second child-a dream
      she thought was not financially possible before Isagenix. The stay-at-home mom’s fast-growing business has allowed
      her to be present for her son while making a significant contribution to the household income.
    </p>
    <p>
      "I feel the best I have ever felt. The fact that it happened while I’m able to earn an income that will allow my husband
      and I to expand our family is something I can never repay. My life is forever changed."
    </p>`;
  }

  private getNicoleSSuccessStory(): string {
    return `
    <h3>Mom Finds Way to Care for Herself, So She Can Care for Others</h3>
    <p>
      Most mothers believe in putting their families first, and many are so busy putting others’ needs above their own that they
      forget to care for themselves. For 28-year-old mother Nicole S., that’s exactly how it happened.
    </p>
    <p>
      "I was taking care of my son, my husband, and doing everything for everyone else all the time," remembers Nicole. "I lost
      myself in all of that."
    </p>
    <h3>The Perfect Gift</h3>
    <p>
      Trying to make time to improve her own health while caring for her young son, Bentley, proved challenging, as he struggled
      with certain feeding difficulties, which required additional time and effort for Nicole.
    </p>
    <p>
      Nicole’s mother, Tammie, had been using Isagenix products and had experienced an incredible transformation. When Tammie came
      to visit her daughter and grandson for Christmas, she gave Nicole the best gift she could—a box of Isagenix products
      to get her started on taking care of herself.
    </p>
    <p>
      "My mom asked me ‘what are you doing for yourself? You need to take care of yourself, that way you can take care of everybody
      else,’" Nicole recalls.
    </p>
    <p>
      Right away, Nicole began using the products her mom had given her, and she began to feel a noticeable difference.
    </p>
    <p>
      "I started having energy and sleeping better," shares Nicole. "My favorite product was the Ionix® Supreme, I still can’t
      go a day without it."
    </p>
    <p>
      Empowered by her goal to become a better mother through improving herself, Nicole committed to joining the IsaBody Challenge®.
    </p>
    <p>
      In the beginning, she focused solely on nutrition with Isagenix, not yet introducing exercise into the mix. Over time, however,
      she found that not only was she able to keep up with a toddler, but she also had enough energy to add a bit of
      exercise into her daily routine as well.
    </p>
    <p>
      "I’m excited to have the energy to exercise and stay active with my son," she says.
    </p>
    <h3>Refusing to Give Up</h3>
    <p>
      Nicole knew her resolve to take care of herself was benefiting her as a mother. "Things seemed to be getting so much better."
    </p>
    <p>
      Just when life seemed to be heading in the right direction, family problems arose. In the middle of her Challenge, Nicole’s
      husband left the family and moved out of state, leaving her to care for Bentley on her own. This proved to be an
      incredibly difficult time in her life, but Nicole knew she couldn’t stop moving forward.
    </p>
    <p>
      "I definitely knew that giving up was not going to be an option," she shares. "I was not going to give up myself, because
      I’ve become a better mom through this whole process."
    </p>
    <p>
      Nicole surged forward with her Challenge, and even began sharing Isagenix with others along the way. Despite this being a
      difficult time in her life, she showed the resilience it took to truly better her life.
    </p>
    <p>
      "I know that I wouldn’t have made it through as much as I did if I didn’t have this to focus on," she says. "It’s helped
      change us and make us stronger. This Challenge definitely saved our lives."
    </p>
    <h3>Stronger than Ever</h3>
    <p>
      Supported by family and friends, Nicole keeps her sights on being the best mom she can be. Tammie says she is "beyond thrilled"
      to see Nicole and Bentley experience a new life.
    </p>
    <p>
      At the conclusion of her IsaBody Challenge, Nicole had dropped 15 pounds* and gained a true passion for Isagenix products.
      That passion has led to her next goal: to share Isagenix with others and to grow her Isagenix business.
    </p>
    <p>
      "How can you not share this freedom with other people when it’s done so much for you"? says Nicole. "I believe in it. I believe
      in the products. I need to do this for me and my son and our future."
    </p>
    <p>
      Nicole hopes to move near her family in Florida and join Tammie in growing their businesses. They look forward to "throwing
      IsaParties for friends who want to experience Isagenix."
    </p>
    <p>
      Feeling stronger now than ever, Nicole’s biggest tip for others beginning their own journey is to remember where they started.
      She focuses on being supportive and helps them with researching product information. Most of all, she encourages
      them to join the IsaBody Challenge as she did.
    </p>
    <p>
      "No matter what you’re going through or what challenges you’re facing, if you just keep pressing forward, you can overcome
      anything and come out stronger and better on the other side."
    </p>`;
  }

  private getRyanESuccessStory(): string {
    return `
    <h3>Through Sickness and Flood, IsaBody Finalist Proves He’s Up for Any Challenge</h3>
    <p>
      They say "when it rains, it pours." For Ryan, an Alberta-native, that was literally how it happened.
    </p>
    <p>
      In June of 2013, a massive flood hit Calgary, Alberta, devastating the area. Reported by the CBC as the most costly natural
      disaster in Canadian history, the flood displaced over 100,000 people from their homes. Ryan and his family were
      among those left homeless.
    </p>
    <p>
      "We were displaced from our home for two months, living at a friend’s house," recalls the father of two. "There was seven
      feet of water in the basement that ate away my basement floor. We had one of those IKEA shelves, the big thick
      ones—it was floating. The area in my basement was toxic and I didn’t want my kids there."
    </p>
    <h3>Better Health, Better Life</h3>
    <p>
      At the same time as the flood, Ryan was also suffering from a candida (fungal) infection in his digestive tract and a condition
      called adrenal fatigue.
    </p>
    <p>
      "Adrenal fatigue is very lifestyle-based," explains Ryan. "You have to hammer nutrition into your body because you run through
      it so much faster."
    </p>
    <p>
      Ryan’s candida illness had similar effects to the adrenal fatigue, which compounded the problem.
    </p>
    <p>
      "Brain fog is the most difficult symptom because you feel so disconnected. Loud noise made it worse, so in social settings
      I would be distant. This and irritability are the biggest issues, making me a very unpleasant person."
    </p>
    <p>
      The loving husband and father of two daughters, ages 7 and 4, has always prided himself first and foremost on being there
      for his girls. With his ailing body, it became an incredible struggle to do so.
    </p>
    <p>
      "There was a time when I couldn’t be myself for my kids," reflects Ryan. "It’s hard to admit that. It’s so hard to lose yourself.
      People don’t realize how bad it is unless you tell them."
    </p>
    <p>
      The natural disaster compounded Ryan’s health issues as he attempted to repair the flood’s extensive damage to his house.
      Additionally, his profession as a Chiropractor added to the physical demands Ryan placed on his body. The 36-year-old
      knew he had to do everything possible to get adequate nourishment.
    </p>
    <p>
      "It was intense. I had no fuel left," remembers Ryan. "You’re just not yourself and you can’t find it in yourself to get
      it back."
    </p>
    <p>
      Back in 2013, Ryan and his wife Angela, met Angela M., who introduced them to Isagenix. Ryan was already interested in similar
      products, but with Isagenix, he found he was able to get everything in one place. He had no idea how much quality
      nutrition would help.
    </p>
    <p>
      "Isagenix provided me with the essential nutrition my body required, which assisted me with correcting my deficiencies,"
      tells Ryan. "It’s also what got me through the flood. I would come in and have my shake and I would keep going.
      That’s truly what allowed me to get through enough to do that."
    </p>
    <h3>A New Kind of Challenge</h3>
    <p>
      After a great deal of effort, Ryan and his family were able to recover from the devastation of the flood and return to their
      home. After seeing the impact Isagenix products had on his body, even through the many obstacles he faced, Ryan
      decided to take on a new challenge.
    </p>
    <p>
      In 2014, with the goal to "be more," Ryan joined the Isagenix IsaBody Challenge.
    </p>
    <p>
      "I thought, ‘This is my chance,’" shares Ryan. "I’m going to give this a shot. The Challenge was perfect because it was going
      to hold me accountable and I was going to push hard."
    </p>
    <p>
      And he did. During the 16-week Challenge, Ryan regained his energy and toned his body, building 5 pounds of muscle.*
    </p>
    <p>
      "The IsaBody Challenge was not about loss for me, it was about the gains," says Ryan. "I gained back my health, my life,
      and my body."
    </p>
    <p>
      As a chiropractor, Ryan understands he is in a unique position to impact the health of others. He sees this as the perfect
      opportunity to share his story.
    </p>
    <p>
      "I talk about the IsaBody Challenge with all of my patients," tells Ryan. "Anybody that’s willing to listen. I find when
      people get on it, they have nothing but great things to say. And I love to hear that because I don’t want to just
      help them physically with treatments, I want to see their lifestyle change."
    </p>
    <p>
      Since completing the Challenge and overcoming major obstacles, Ryan has continued to improve his health. He sees Isagenix
      as a "lifestyle" and continues to use the products to properly nourish his body.
    </p>
    <p>
      "I got back the passion for life," Ryan says with a smile. "It’s about leaving your mark and making a difference for people
      in their health."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Train hard, recover harder: Your ability to recover is vital to getting the best results and staying healthy. Nutrition
        is the foundation of recovery.</li>
      <li>Hard work pays off: Some days you will have to dig deep but you will get out what you put in. Just keep in mind
        that what you get out may not be what you expected—but better.</li>
      <li>Find your inspiration: Having your "why" will be your constant reminder of the purpose behind your efforts. It
        will allow you to put the challenging days or moments into perspective so you can renew yourself and your approach.</li>
      <li>Have fun: Your success will be more fulfilling if you had fun along the way.</li>
    </ul>
    <h3>Ryan's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse For Life®</li>
      <li>IsaDelights®</li>
    </ul>`;
  }

  private getAbbyGSuccessStory(): string {
    return `
    <h3>The Speed of Purpose: From Couch Potato to IsaBody Finalist</h3>
    <p>
      One day after work, Abby was reprising her role as a self-proclaimed "couch potato” when she came to a sudden and startling
      revelation—life wasn’t getting any better. She was in her early 20s and her life had already settled into an unfulfilling
      and unhealthy routine.
    </p>
    <p>
      "Every day became a carbon copy of the one before it," says Abby. "I went to work, grazed the fridge and cabinets for hours
      on end eating unhealthy snacks, then I’d plop down on the couch and watch TV until I couldn’t keep my eyes open,"
      confesses Abby. "I had no motivation."
    </p>
    <p>
      Nothing could move her. "My boyfriend would try to get me to go on walks or ride bikes," Abby remembers, "but I just wasn’t
      interested."
    </p>
    <p>
      Her ‘aha moment’ came when she saw pictures of herself from a friend’s party. "I saw pictures of myself and I was appalled,"
      says Abby, "I realized it was time to make a change–things weren’t going to get any better–I didn’t even recognize
      myself."
    </p>
    <h3>Abby’s IsaBody Motivation</h3>
    <p>
      Abby started with Isagenix in March of 2013. "I started using the 30-Day Cleansing and Fat Burning System," she says, "I
      started to see pretty fast results, and considered joining the IsaBody Challenge®."
    </p>
    <p>
      "My trainer suggested we do the Challenge, so that is exactly what I did to hold myself accountable," remembers Abby, "I
      never in a million years expected to be a finalist! I just saw that I needed to change my lifestyle."
    </p>
    <h3>Abby’s New Normal</h3>
    <p>
      Today, Abby’s routine is very different. "These days, I get a lot of compliments," She shares confidently, "especially
      during the final weeks of the Challenge."
    </p>
    <p>
      Abby talks about some of her favorite Isagenix products. "I take e+™ before every workout. Isagenix fuels my energy. I feel
      more alive and am more motivated and I’m so excited to tell others about Isagenix. Then there’s Ionix®. I can’t
      go a day without it."
    </p>
    <p>
      Friends and family have really noticed a significant change in Abby’s physique. "I frequently hear, ‘Wow you’ve really lost
      a lot of weight’ and I must say that feels good."
    </p>
    <h3>A Challenge For The Future</h3>
    <p>
      Being an IsaBody Challenge Finalist has changed Abby’s life. "I plan to compete in many other IsaBody Challenges," states
      Abby. "I love the discipline and it helps me stay focused, lowers my body fat percentage and reach a higher level
      of fitness."
    </p>
    <p>
      Abby is driven. "I love to share my story with everyone I meet. My goal is to build a business and help people. Isagenix
      is the perfect way to build both."
    </p>
    <h3>Abby's Tipe for Weight-Loss Success and IsaBody Success</h3>
    <ul>
      <li>
        <strong>Focus on your goals.</strong> Whether you want to release pounds, gain lean muscle or improve your health at
        any age, IsaBody has a Challenge for you.</li>
      <li>
        <strong>Take the Challenge seriously.</strong> This Challenge is about transformation that moves you to make lasting
        changes for healthy longevity.</li>
      <li>
        <strong>Share!</strong> Discuss the IsaBody Challenge whenever possible, you’ll be surprised at how much it will motivate
        you.</li>
    </ul>
    <h3>Abby's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>e+™ Energy Shot</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getAmyraMSuccessStory(): string {
    return `
    <h3>Florida Fitness Instructor Gets Fit with Isagenix</h3>
    <p>
      "Life before the IsaBody Challenge® was frustrating," shares Amyra, a former Tampa Bay Buccaneers NFL Cheerleader and current
      group fitness instructor. "I was always active yet kept gaining weight. Then to be in front of a group, trying
      to help them get in shape and not being in shape myself, was exhausting and disappointing."
    </p>
    <p>
      Not to mention the not-so-exciting news she received from her doctor following her yearly physical.
    </p>
    <p>
      "The tremendous financial pressure my family was having, the stresses of motherhood, and the long hours my husband was working
      resulted in a lot of late-night snacking and me weighing 173 pounds," says Amyra.
    </p>
    <p>
      That’s when her good friend shared Isagenix.
    </p>
    <h3>Becoming Her Biggest Fan</h3>
    <p>
      "I immediately ordered the 9-Day Deep Cleansing and Fat Burning System and signed up for the IsaBody Challenge," she says.
    </p>
    <p>
      The first Challenge was all about transforming her physical appearance. The second was about transforming her life.
    </p>
    <p>
      "I lost 7 pounds* that first week," exclaims Amyra. "But it was at Celebration 2013 when I realized that this is more than
      just a physical transformation. I saw the financial opportunity available with Isagenix and gained a hope for the
      future."
    </p>
    <p>
      The desire to look her best, coupled with her drive to financially give back to her family, drove her to get up each morning
      and work out.
    </p>
    <p>
      Her success became apparent three months into her first Challenge when she slipped back into her pre-pregnancy jeans. Even
      more exciting for Amyra was purchasing her first pair of size 2/4 jeans less than one year after joining Isagenix,
      and after completing her second Challenge—a transformation slim down of six pant sizes.*
    </p>
    <h3>Creating Team Spirit</h3>
    <p>
      Today, this successful Crystal Executive is happier and healthier than she’s ever been. She’s also contributing between $300
      and $900** a month to her family’s household income!
    </p>
    <p>
      "Taking part in the Challenge has established more credibility and more authority in my business than I could ever articulate
      in a conversation," explains Amyra.
    </p>
    <p>
      Her personal and professional goals moving forward are to share the vision and build a team of like-minded people. She also
      wants to help families experience the same financial relief to ultimately live the life they desire.
    </p>
    <p>
      "I start by sharing the cost-saving benefits of the President’s Pak," laughs Amyra. "I spent so much money during my first
      month between ordering the 9-Day System, vitamins and snacks for my kids, and extra products for my husband to
      try. I wish someone would have told me sooner."
    </p>
    <p>
      So, what’s next for this IsaBody Challenge Top Achievers Finalist?
    </p>
    <p>
      "We [my team and I] are currently doing a 90-Day Game Plan," shares Amyra. "I have made a commitment to myself that while
      I continue to wake up everyday at 5 a.m. to work out in preparation for Celebration in August, I will work my business
      just as hard in hopes of achieving 3-Star Golden Circle by then!"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Engage in exercise.</strong> "Just drink the shake and earn your shower!” (Follow the program and engage in any
        exercise that you enjoy that makes you sweat.)</li>
      <li>
        <strong>Focus on today.</strong> Don’t focus on the end goal. It can be overwhelming. Focus on the day and celebrate
        your daily accomplishments. They will accumulate into the big goal achieved!</li>
      <li>
        <strong>Talk to others.</strong> Plug in to the IsaBody community. Take lots of pictures and share your journey. It will
        inspire others which will serve as motivation for you.</li>
      <li>
        <strong>Stay the course.</strong> No matter what, don’t quit!</li>
    </ul>
    <h3>Amyra's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>Whey Thins™</li>
    </ul>`;
  }

  private getAngieRSuccessStory(): string {
    return `
    <h3>Top Achiever Finalist Hopes to ‘Spread the Secret’</h3>
    <p>
      "Many times throughout my life I would turn to food for comfort," reflects Angie, a 2014 IsaBody Challenge® Top Achiever
      Finalist. "The more I ate, the more I gained. The more I gained, the more I tried to shed the weight. The more
      I failed, the more I ate. I was in a vicious cycle and was my own worst enemy."
    </p>
    <p>
      After 20 years of "trying every fad diet under the sun," Angie glanced at her family—the majority who were overweight—and
      chalked it up to genetics.
    </p>
    <p>
      "Let me put it this way: By that time, the only thing I hadn’t done was gastric bypass surgery," shares Angie who was 258
      pounds before being introduced to Isagenix in March 2013.
    </p>
    <h3>Proving a Point</h3>
    <p>
      Angie’s friend, Stephanie, gave her the 30-Day Cleansing and Fat Burning System to prove that Angie could lose the unwanted
      weight with the right tools.
    </p>
    <p>
      Wanting to equally prove to her friend that Isagenix was another "fad diet," Angie was actually pleasantly surprised. The
      products not only worked, but Angie enjoyed the overall simplicity of the system.
    </p>
    <p>
      "Stephanie definitely got me," laughs Angie. "I’m so happy she was right and I was wrong."
    </p>
    <p>
      Since then, Angie went through an outstanding transformation losing 140 pounds.* Her incredible results inspired her father
      to join Isagenix and embark on a similar weight-loss journey. Together, the daughter and father each lost more
      than 100 pounds,* and entered the prestigious 100-Pound Club together.
    </p>
    <h3>Bring It On</h3>
    <p>
      Angie’s a pro at bringing dreams to life. She dreamt of finding the "Angie within" and accomplished that after being asked
      to join the IsaBody Challenge by an Isagenix employee, Ashley, who was inspired by her transformation when she
      lost her first 100 pounds.*
    </p>
    <p>
      Since joining the IsaBody Challenge, the Arizona native lost 28 more pounds and succeeded her goal of reaching her high school
      weight of 125 pounds. Now, Angie’s a happy and healthy 118 pounds, and ready to compete for the title of 2014 IsaBody
      Challenge Grand Prize Winner.*
    </p>
    <p>
      "I think everybody should continuously be in the IsaBody Challenge," expresses Angie. "Because whatever goal you’re trying
      to reach, if you have a tool such as the IsaBody Challenge to hold yourself accountable, no one else can hold you
      accountable except you—it’s your choice."
    </p>
    <p>
      With losing a total of 26 sizes* since joining Isagenix, Angie believes it’s not about the size of your pants that makes
      you a winner—it’s how you feel inside.
    </p>
    <p>
      "I feel fantastic. I look a lot better. I’m years younger. And I’m able to run and play with my children for the first time
      in their whole lives," says Angie, a mother of three. "With this newfound energy, the greatest prize of all is
      that I won my life back."
    </p>
    <h3>Sharing the ‘Secret’</h3>
    <p>
      Now on a daily regime of using the 30-Day System, the 1-Star Golden Circle, Crystal Director has another dream to make a
      reality: inspiring others through her journey of overcoming self-doubt while achieving their peak of wellness.
    </p>
    <p>
      As a Top Achiever Finalist, Angie’s been awarded $3,000 cash, a trip for herself and a guest to 2014 Top Achievers, 2014
      Celebration and a spot aboard the 2014 IsaBody Challenge Transformation Cruise.***
    </p>
    <p>
      "I am definitely associated with Isagenix to help everyone that I can," says Angie. "I mean, I want to shout to the world:
      ‘I found the secret, everybody! Come here; I can help you.’"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Hold yourself accountable.</strong> That way, you don’t blame a friend or spouse or whomever for your actions.
        You have to answer to yourself.</li>
      <li>
        <strong>Join multiple Challenges.</strong> Whatever goal you’re trying to reach, if you have a tool such as the IsaBody
        Challenge, it keeps making you better and stronger.</li>
      <li>
        <strong>Work straight from the heart.</strong> Find a workout that moves you, put your heart into it, and visualize that
        goal from your heart.</li>
      <li>
        <strong>Everything happens for a reason.</strong> We all find ourselves using Isagenix through some personal journey.
        Just know that no matter what happens, it’s there for a reason and use that to empower your goal.</li>
    </ul>
    <h3>Angie's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Shakes</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getBenMSuccessStory(): string {
    return `
    <h3>Wrestling With An Unhealthy Life</h3>
    <p>
      Collegiate Certified Athletic Trainer coach Ben M. dedicated his life to encouraging the fitness and performance of others.
      But when it came to his own health, he couldn’t quite pin a healthy lifestyle down. "I was obese," recalls Ben.
      "I hold a master’s degree in health and human performance, but I couldn’t take my own health seriously."
    </p>
    <p>
      Ben recalls his earlier years. "I’ve always been an active guy but never a fit guy." He continues, "I was always tired
      and kept sleeping heavily. My hands and feet were always swollen." Ben had a sobering revelation. "I was just
      15 years younger than my dad when he died of a heart attack."
    </p>
    <h3>Tapping Out Early</h3>
    <p>
      Ben confesses he "was tired all the time," especially after the birth of his second daughter. His health continued to deteriorate.
      "I had just returned from a national athletic training convention, and I had health testing done. My biometric
      numbers were out of control, and in the second year, my numbers were even worse."
    </p>
    <p>
      With his health in decline, Ben noticed other disturbing developments. "I was falling asleep every night by 7 p.m. My health
      just wasn’t where I wanted it to be." Ben reached a crucial decision. "If I was going to make a change, it was
      now or never."
    </p>
    <h3>A Nutritional Rematch</h3>
    <p>
      Ben needed help. "I met with, Tryg and Tracy, my athletic trainers from college," he remembers. "Two people I’ve always
      looked up to and respected. They’re always looking good, always into fitness. They suggested Isagenix." It was
      then that Ben decided to take the first step. "I decided to sign up and join Isagenix that night."
    </p>
    <p>
      Ben can hardly contain his passion for the IsaBody Challenge® and committing gave him a whole new perspective. "It got me
      up off the couch and helped me get my health back on track," he says. "It’s awesome!"
    </p>
    <p>
      Ben’s sky-high confidence and impressive results are winning hearts, minds and bodies to Isagenix. "My confidence and my
      results are an inspiration to others, and that," he confides, "feels really good."
    </p>
    <h3>Tackling Healthy New Goals</h3>
    <p>
      Ben is training for the Oklahoma City Memorial Marathon–and that’s just the beginning. "I’m also in the hunt for six-pack
      abs by summer," he shares. "Training is going great—I’m not going to stop until I get them."
    </p>
    <p>
      "I loved getting the IsaBody call," Ben recalls. "Becoming a finalist really motivated me. I’m getting better all the time.
      I’m aiming for 5 percent body fat; I want to look like a sprinter."
    </p>
    <p>
      "My diet has never been this energy-packed," Ben insists. "Nowadays, I can’t wait to work out, and Isagenix is always there
      for me."
    </p>
    <h3>Ben's Tips for Success</h3>
    <ul>
      <li>
        <strong>Commit.</strong> Releasing unwanted pounds takes determination, focus and the right nutrition. No matter what
        your IsaBody™ goals, take them seriously.</li>
      <li>
        <strong>Stay focused.</strong> Don’t let anything distract you and prevent you from achieving what you want.</li>
      <li>
        <strong>Take command.</strong> The Challenge puts you in control. It’s your ship–you’re the Captain. Set a course for
        success and set sail.</li>
      <li>
        <strong>Don’t be shy.</strong> Discuss the IsaBody Challenge with everyone you meet. The energy and words that come from
        you will be motivational – and infectious!</li>
    </ul>
    <h3>Ben's Favorite Products</h3>
    <ul>
      <li>IsaLean® Bar (Chocolate Cream Crisp)</li>
      <li>IsaLean® Pro (Natural Vanilla)</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getBobSSuccessStory(): string {
    return `
    <h3>Top Achievers Finalist and Seasoned Network Marketer Reignites Business</h3>
    <p>
      Before Bob joined the IsaBody Challenge® he had been a business builder for nearly five years, using the Challenge as his
      key enrollment tool.
    </p>
    <p>
      When he was not actively building his business with his wife, Andreja, the two were running their family-owned fine dining
      European restaurant in British Columbia.
    </p>
    <p>
      "We work on average 12 to 16 hours a day, so when we came across Isagenix in April 2009, it was a complete blessing in disguise,"
      shares Bob.
    </p>
    <p>
      They were enjoying some much needed down time on the beach in Mexico when they met Isagenix Millionaires, 16-Star Platinum,
      20-Star Crystal Executives Herb and Patty C.
    </p>
    <p>
      "We found something in Patty and Herb that we didn’t even know we were looking for that day," recalls Bob.
    </p>
    <h3>Pushing the Envelope</h3>
    <p>
      The next day, they enrolled with Isagenix.
    </p>
    <p>
      Over the next few years, Bob and his wife became faithful product users, slowly building their business. Everything was good,
      but Bob knew it could be better. He knew if he really wanted to ignite his business, he had to lead by example.
      That’s when he joined the Challenge.
    </p>
    <p>
      He also wanted to put to rest some lurking misconceptions about Isagenix being a fad diet in his area.
    </p>
    <p>
      "My goal was to be one of the first contestants to actually put on weight and to also prove that this system was not a ‘diet,’
      but a true heath and wellness program that will do what you desire."
    </p>
    <p>
      To start his journey, he ordered the Performance President’s Pak. He also carved out one hour a day for the gym—a place Bob
      rarely went despite being fairly fit.
    </p>
    <h3>Building on Momentum</h3>
    <p>
      After a few weeks of combining the products with regular exercise, Bob’s body started to lean out. His results inspired his
      trainer and a few gym goers to also try the products, which also helped to organically grow his business.
    </p>
    <p>
      For Bob, his journey was never about weight loss but instead about weight gain. His motto was simple: Focus on the process
      and results will come.
    </p>
    <p>
      "My motivation came each time I saw the amount of weights I was lifting increase," excites this 2014 Top Achievers Finalist.
      "That was proof I was succeeding."
    </p>
    <p>
      In addition to packing on more muscle, another element of Bob’s journey was to inspire others to get healthier.
    </p>
    <p>
      By the end of Bob’s Challenge he had done both: he had gained 8 pounds* and was sporting washboard abs all while igniting
      his business.
    </p>
    <p>
      Currently a 5-Star Golden Circle and 4-Star Crystal Executive earning between $280,000 and $417,000 a year,** Bob now speaks
      with confidence when sharing the benefits of the Challenge with others.
    </p>
    <p>
      "Isagenix has also helped bring out the teamwork between my wife and me," adds Bob. "Running a successful restaurant sometime
      means you’re running in opposite directions to get everything done."
    </p>
    <p>
      Now, Bob and his wife are encouraging everyone on their team to join the Challenge.
    </p>
    <p>
      "Part of this journey is about discovering a new you," shares Bob. "I love this Challenge for giving me the drive and accountability
      to keep motivated."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Give yourself a break.</strong> Don’t make it so regimented that you set yourself up for failure.</li>
      <li>
        <strong>Have an accountability partner.</strong> Ask either someone in the IsaBody Challenge or a trainer to help you
        stick with the program.</li>
      <li>
        <strong>Create a motto.</strong> Mine is "Focus on the process and results will come!”</li>
      <li>
        <strong>Have fun!</strong> Approach each day with enthusiasm. People will start to want what you have—this is a business
        building tool when used right.</li>
    </ul>
    <h3>Bob's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>e+™</li>
      <li>IsaLean® Bars</li>
    </ul>`;
  }

  private getDavidJSuccessStory(): string {
    return `
    <h3>From Wake-Up Call to Weight-Loss Success</h3>
    <p>
      Ask David about life before the IsaBody Challenge®, and he sums it up in one word: unhealthy. "I was eating lots of frozen
      and processed foods," he says. "As I entered my 40s, my health started deteriorating rapidly – high blood pressure,
      a bulging (spinal) disc, sleep apnea – you name it."
    </p>
    <p>
      David, a veteran financial planner from Dubuque, Iowa, recalls a deteriorating state. "My health was unraveling. I was overweight
      and eating unhealthy. Even worse," he confides, "a good friend had passed away who had a lot of similar health
      challenges. He was my age."
    </p>
    <p>
      "I had to either accept dying soon," shares David, "or get off my butt and do something about it." He began to set priorities.
      "You don’t appreciate good health until it’s gone. I was in pain, feeling bad and very unhealthy. It was time for
      a change."
    </p>
    <h3>A Sound Investment in Health</h3>
    <p>
      Determined to reach his goals, David searched for an answer. "I knew I needed help to release excess weight, but I didn’t
      know where to turn," he remembers. David wanted to avoid a medicine cabinet filled with prescription drugs, so
      he decided to do some research to look for a healthier alternative. Shortly after, his doctor asked him if he was
      interested in attending a nutritional seminar.
    </p>
    <p>
      That seminar was an Isagenix presentation. "I went, and I was so impressed, I signed up right away. I trusted my enrolling
      sponsor, so I trusted Isagenix. I just had to try it."
    </p>
    <p>
      For David, the systems were easy to follow. "I followed [them] and watched the weight melt off. In the mirror, I saw the
      fit young man I was in high school returning. It was really exciting."
    </p>
    <h3>IsaBody Closes The Deal</h3>
    <p>
      Soon after joining Isagenix, David signed up for the IsaBody Challenge to hold himself accountable and he has never looked
      back. The IsaBody Challenge gave him inspiration to compete with others. "Since high school football, competition
      has always motivated me," David says. "I was hooked."
    </p>
    <p>
      "I didn’t know what the magic number should be," he adds referring to weight watching, "but I knew I wanted to start feeling
      healthy and fit."
    </p>
    <h3>A Brighter Future</h3>
    <p>
      Ask David today about his life, and his enthusiasm is infectious. "Oh my gosh, everything’s changed!" he says zealously.
      David hoped to lose weight, but he didn’t expect such drastic results in so many arenas. His health, his cardio
      and his physical strength are back.
    </p>
    <p>
      David beams, "Recently, I have met the woman of my dreams. I’ve surrounded myself with positive and empowering people, and
      my life and health now seem to be in balance. I have hope again."
    </p>
    <h3>David's Tips for Success</h3>
    <ul>
      <li>
        <strong>Just commit.</strong> When I started, I didn’t start with the IsaBody Challenge being the main reason I joined.
        Even if you don’t want to, do it anyway, because it holds you accountable.</li>
      <li>
        <strong>Stay focused on your end goal.</strong> When you know you have pictures and measurements coming up during the
        IsaBody Challenge, believe me, it keeps you accountable.</li>
      <li>
        <strong>Share!</strong> I share my IsaBody Challenge story, and others have signed up based purely on hearing my experience.
        Trust the plan completely.</li>
    </ul>
    <h3>David's Favorite Products</h3>
    <ul>
      <li>IsaLean® Bars (Chocolate Decadence & Lemon Passion Crunch)</li>
      <li>IsaDelight® (Milk and Dark Chocolates)</li>
      <li>IsaLean® Shakes (Creamy Dutch Chocolate)</li>
    </ul>`;
  }

  private getElizabethBSuccessStory(): string {
    return `
    <h3>Paramedic Makes Life-Changing Decision</h3>
    <p>
      Growing up, Elizabeth was very active. She loved swimming and enjoyed participating in water polo. By 18, her athleticism
      transitioned out of the water and into CrossFit. As an adult, her fit, 170-pound frame made the physical demands
      of her job as a paramedic easier.
    </p>
    <p>
      It wasn’t until she became pregnant with her son and put on bed rest that her weight became an issue.
    </p>
    <p>
      "When I entered the hospital to have my son, I weighed 245 pounds," shares Elizabeth. "When I left, I was still well over
      220 pounds."
    </p>
    <p>
      She had gained 75 pounds in nine short months.
    </p>
    <h3>Running for a Reason</h3>
    <p>
      When her son was six months old, Elizabeth decided to start running—an exercise she never thought she could do, but was determined
      to try. By the time her son turned one, she was running 25 miles a week. Doing all that cardio only dropped Elizabeth’s
      weight to 190 pounds.
    </p>
    <p>
      That’s when she decided to take her friend up on her offer to try the Isagenix 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      "She shared Isagenix with me while I was pregnant but I wasn’t open to it at the time," adds this California resident.
    </p>
    <p>
      It came to a point during one of her daily runs that she found herself feeding her son snacks and entertaining him with her
      iPad that she realized her workouts were no longer working out.
    </p>
    <h3>Taking Hurdles Head On</h3>
    <p>
      After taking the plunge and ordering the 30-Day System, she also teamed up with her mom and joined the IsaBody Challenge®.
    </p>
    <p>
      "I still remember my first month and losing 23 pounds,"* shares this 2014 Top Achievers Finalist. "That was an incredible
      milestone."
    </p>
    <p>
      By the end of her first Challenge she was down 34 pounds total.*
    </p>
    <p>
      Her hard work earned her Honorable Mention in the 2013 New Year Kick Off Challenge period and the chance to show off her
      sleek new physique onstage at our yearly event. Her transformation not only inspired others, but their vote of
      confidence inspired Elizabeth to sign up for another Challenge.
    </p>
    <p>
      At the end of her subsequent, back-to-back Challenge, Elizabeth released an additional 10 pounds. More importantly, she went
      from 39 percent to 16 percent body fat and released 80 inches from her body.*
    </p>
    <p>
      Her journey encouraged those around her to join Isagenix, which in turn, ignited her business.
    </p>
    <p>
      Because of her success, she has been able to step away from her 56-hour work week and substitute it with the money she’s
      making in her Isagenix business.
    </p>
    <p>
      Now, this 1-Star Golden Circle, Crystal Executive, who earns between $28,000 and $53,000 a year,** teaches paramedic school
      twice a month—not because she has to, but because she wants to!
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Commit!</strong> Make a commitment to yourself. Making a life change is not something you can do for anyone but
        yourself!
      </li>
      <li>
        <strong>Stick with it.</strong> Know that everyone has days when they struggle. Do not let what happened yesterday shape
        today.
      </li>
      <li>
        <strong>Have fun.</strong> Reward yourself along the way by trying new classes and even new activities.</li>
    </ul>
    <h3>Elizabeth's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B®</li>
      <li>e+™</li>
    </ul>`;
  }

  private getErinPSuccessStory(): string {
    return `
    <h3>Celebration Finalist and IsaDerby Winner Envisions a Brighter Future</h3>
    <p>
      "I have struggled with my weight for years. Even though I was doing the right things, eating well and exercising, I wasn’t
      seeing results," admits 43-year-old Erin. "There were constant food cravings and I found myself overeating and
      overdrinking. So of course I was frustrated, exhausted and had very low energy." This mother of two always had
      a desire to help others. For fifteen years she served as a school counse-lor and mindset coach.
    </p>
    <p>
      "I loved working with children at school," reflects Erin. "But I always had a bigger vision, I wanted to contribute on
      a bigger scale. I wanted more income for my family, and I valued my time freedom. Even more, I wanted to spend
      that time with my family and enjoy the prospect that life is open to you."
    </p>
    <p>
      With her husband, Geoff, in the Canadian Air Force, Erin and her daughters were constantly on the go. Within a few years,
      the family had moved across the country four different times.
    </p>
    <p>
      Emotionally and physically, Erin was spent.
    </p>
    <h3>Health is No. 1</h3>
    <p>
      "My friend, Wendy, suggested I do a cleanse," recalls Erin. "I didn’t know anything about it, but knew that I needed to
      transform my health—that was number one, because I kept doing everything by my-self and that just wasn’t working."
    </p>
    <p>
      In 2011, Erin went on the 30-Day Cleansing and Fat Burning System and lost noticeable weight in the first month.* With the
      support of Wendy and other Isagenix Associates, Erin felt emotionally support-ed to achieve her goals.
    </p>
    <p>
      "After the cleanse, I felt energized and my sleep was much better," says Erin. "I felt amazing and hadn’t felt like this
      before."
    </p>
    <p>
      She continued to purchase the products when she realized that she could reap the benefits of Isagenix to help create income.
    </p>
    <p>
      "My first goal was to get my products paid for, which I did in my first few weeks," explains Erin. "Then I set a goal to
      get a new car. And the next week I did."
    </p>
    <p>
      In her first year, Erin made $100,000.** The now 5-Star Golden Circle, 4 star Crystal Executive had so many goals and visions
      for her future, that she aimed to win IsaDerby™ in her first year.
    </p>
    <p>
      "I was the number one point earner in 2011 and have been to IsaDerby three years in a row," exclaims Erin. "It’s the same
      solid mindset to win IsaDerby that got me to the IsaBody finals."
    </p>
    <h3>Envisioning A Better Future</h3>
    <p>
      "Every year I would join the IsaBody Challenge®, but never completed it," reflects Erin about her health journey. "That
      first year I kept my weight off and felt great. And then my second year, we moved across the country and I just
      got so focused on building my business that my life got out of balance."
    </p>
    <p>
      It was during that time that Erin stopped exercising and taking care of herself.
    </p>
    <p>
      "I think it was fear of losing my business," admits Erin. "It was the fear of it going away or I guess I had to build trust
      that this was going to stay." She knew that she had to beat this perspective and envisioned a new goal for herself.
    </p>
    <p>
      "I made the decision that I wanted to represent Isagenix in all areas: as an athlete, as a woman who’s aging in a healthy
      way, and as a woman who’s making income for her family," says Erin.
    </p>
    <p>
      In January 2014, Erin wrote a note on a recipe card about the person she wanted to become.
    </p>
    <p>
      "I want to be an IsaBody Finalist. I want to get into elite shape. I want to be a woman who does not apologize for who she
      is. A women who follows through," wrote Erin.
    </p>
    <p>
      By successfully competing in the IsaBody Challenge, Erin released 24 pounds.* Now at 5’6" and 134 pounds,* she feels like
      the person she’s always wanted to become.
    </p>
    <p>
      "The biggest thing that the IsaBody Challenge has taught me is that my future has unlimited potential," emphasizes Erin.
      "Before, I had a lot of fear about the future. And now the biggest change is that I’m excited about it!"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Make a decision.</strong> Decide with absolute clarity what you want to achieve and who you get to become on
        this journey.</li>
      <li>
        <strong>Write down your goals.</strong> Visualize yourself making these a reality. Every night plan out your next day,
        the products you are using, your meals, your fitness and time for yourself.</li>
      <li>
        <strong>Plug in to the support!</strong> Join your team’s Facebook support page, listen to Isagenix podcasts, go to local
        Isagenix events, and surround yourself with people and information that support you.</li>
      <li>
        <strong>Never quit.</strong> When you feel like you’ve hit a roadblock, ask for help, take a deep breath and keep moving
        toward your goal. Consistency will bring you massive success… Quitting is the only way to fail!</li>
    </ul>
    <h3>Erin's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro (Creamy Vanilla)</li>
      <li>Brain and Sleep Support System™</li>
      <li>Ionix® Supreme</li>
      <li>IsaOmega Supreme®</li>
    </ul>`;
  }

  private getJasonOSuccessStory(): string {
    return `
    <h3>U.S. Military Veteran Takes on New Challenge</h3>
    <p>
      Jason was attached to the special operations unit in the U.S. Army in the 1990s. Back then, his life was about traveling
      the world, participating in various military operations and experiencing unbelievable journeys.
    </p>
    <p>
      "I was living the adventure and my dream," says the now 39-year-old Jason. "Back then, I really thought I was in the best
      shape of my life. Being in top physical and mental condition was essential to being a soldier because you never
      knew what was around the corner."
    </p>
    <p>
      When he returned home to the United States after eight honorable years of service, Jason couldn’t help but feel a "sadness
      in his heart."
    </p>
    <p>
      "I missed the recognition for doing well," shares Jason. "A lot of times, you just don’t get that in the civilian sector."
    </p>
    <h3>Adjusting Back to the Norm</h3>
    <p>
      Shortly after his discharge, he began working as a supervisor in a warehouse in his home state of New York, and then later
      in Durham, North Carolina. That’s when he started developing some not-so-healthy habits—including smoking and poor
      eating.
    </p>
    <p>
      "Within 10 years as a supervisor, my health started to deteriorate," reflects Jason. "I had undergone three abdominal hernia
      surgeries between 2006 and 2011. My life and self-worth were at an all-time low. Deep down, I knew I wasn’t doing
      what I was meant to do."
    </p>
    <p>
      At only 5’4", Jason tipped the scale at 215 pounds.
    </p>
    <p>
      "I would stand in once place and literally be crushed under my own weight," he admits. "I couldn’t even bend over and tie
      my shoes due to weight gain. Obviously, that’s not the best place to be."
    </p>
    <p>
      After a divorce, custody battle and resigning from the warehouse industry, Jason knew the negative signs were meant for him
      to turn his life around.
    </p>
    <p>
      "I just let life get to me and thought: ‘I need to take control,’" says Jason.
    </p>
    <h3>Regaining Life</h3>
    <p>
      In September of 2012, Jason’s now-fiancé, Sandra, introduced him to Isagenix and the IsaBody Challenge®.
    </p>
    <p>
      "I saw the IsaBody Challenge as a chance for me to make my mark in a positive way—not only to improve my health and wellness,
      but to be able to inspire others to have the courage to embark on their own journey," says Jason. "The Challenge
      gave me an opportunity to look in the mirror and make myself the person who I’ve always wanted to become."
    </p>
    <p>
      Now, Jason is 163 pounds and went from a size 40 to a 29.*
    </p>
    <p>
      "I haven’t been that size since I was a freshman in high school," exclaims Jason.
    </p>
    <p>
      What impresses Jason most about the Challenge isn’t the weight loss—it’s the friendships and recognition gained that reminded
      him of Army camaraderie.
    </p>
    <p>
      "As time grew, it became clear to me that Isagenix is more than a Challenge," explains Jason. "The people you meet—that
      touched your heart, that inspired you and that you’ve been inspired by—it’s just tremendous. You see that same
      comradeship in the military and I appreciate how that is reflected in Isagenix. You think, ‘How everybody wants
      you to succeed and how can you turn that down?’"
    </p>
    <p>
      Jason now no longer carries the nostalgia from the Army, finally realizing that it’s time to start a new chapter in life.
    </p>
    <p>
      "My biggest milestone throughout the IsaBody Challenge was that I had no desire to fall on those crutches: the smoking and
      the excessive eating. That’s all gone now."
    </p>
    <p>
      Now Jason is focused on achieving the positive life that he never knew he could have.
    </p>
    <p>
      "Isagenix is a lifestyle change," says Jason. "And I love explaining to people that there’s nothing out there worth having
      if you don’t work hard for it. That’s what the IsaBody Challenge did for me."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Nutrition is key.</strong> You can’t out-exercise poor eating habits.</li>
      <li>
        <strong>Make the commitment.</strong> Make a healthy active lifestyle a priority. Engage in activities that you enjoy.</li>
      <li>
        <strong>Surround yourself with like-minded people.</strong> Stick with individuals that will share your hopes and dreams.
        Positive company can motivate and inspire you when you need it most.</li>
      <li>
        <strong>Share your story.</strong> You may really be surprised by those whom you inspire with your success.</li>
    </ul>
    <h3>Jason's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>e+™ Energy Shot</li>
      <li>Replenish™</li>
    </ul>`;
  }

  private getJenniferRSuccessStory(): string {
    return `
    <h3>Former Trainer Finds Path Back To Glory</h3>
    <p>
      Jennifer was always on the go. An avid athlete, she worked diligently to keep her weight in check – until she hit her 30s
      when her weight started to slowly creep up. "My weight yo-yoed, up, then down, then up again," she says. "I was
      all over the map."
    </p>
    <p>
      Jennifer remembers her early career and her deep connection to physical fitness. After receiving her honors degree in Fitness
      and Lifestyle Management, Jennifer worked as a personal trainer throughout her 20s. However, even with her passion
      for fitness, her health-and-wellness challenges started to mount.
    </p>
    <h3>Going to the Dogs</h3>
    <p>
      Jennifer recalls when things began to change. "My life went to the dogs," she says, "literally." Steering away from her
      health and fitness roots, she made a drastic lifestyle change. She moved north from the city of Toronto out to
      the country and began raising Alaskan Malamutes and became a professional dog trainer and groomer.
    </p>
    <p>
      "I spent lots of time on the road, going to dog shows and competitions," she says. "Everything I did was for the sake of
      my dogs’ performances." She discusses the sacrifices and eventual toll of her commitment, "I didn’t exercise
      or make healthy food choices, and my figure paid the price."
    </p>
    <h3>Isagenix Unleashed</h3>
    <p>
      Jennifer decided to kick a new healthy, Isagenix-powered lifestyle into high gear. "A close friend from college, Tinya G.,
      was doing something really remarkable with Isagenix," Jennifer recalls, "I decided to find out more."
    </p>
    <p>
      "Tinya hosted Isagenix parties at her house and was clearly doing something to turn her life around," Jennifer says. "I
      finally reached out to her," Jennifer admits, "but I was very apprehensive. When I discovered the healthy nutrition
      in the products, though, I just knew I’d be wowed by the results."
    </p>
    <p>
      By day four of her first 30-Day Cleansing and Fat Burning System, she became a true believer, both of the product and the
      business. "I’ve always been receptive to network marketing," Jennifer says. "When I discovered Isagenix, I knew
      I found my home."
    </p>
    <h3>From Mush to Muscle</h3>
    <p>
      When she committed to the IsaBody Challenge, Jennifer was once again driven. "It’s a complete 180-degree change," she shares,
      discussing her transformation due to the IsaBody Challenge.
    </p>
    <p>
      The goals she set for herself at the start of the Challenge helped her get serious about completing it. "When I started this
      Challenge, I discussed the importance of completing it with an Associate on another team," she says. "That really
      helped me focus."
    </p>
    <h3>Success of the Highest Pedigree</h3>
    Isagenix started as a weight release journey for Jennifer, but it has turned into so much more. "I did three 30-Day Cleansing
    and Fat Burning Systems back-to-back to lose the initial weight," she says. "I’ve gained amazing strength, incredible
    energy and unheard-of recovery levels. I thank the products and my training and focus in the IsaBody Challenge for
    that."
    <p>
      Jennifer has now retired from her career as a dog groomer, but continues to breed and show dogs as a hobby. "Isagenix is
      my career now," she says. "Inspiring others to get the very best from life makes me more passionate about my
      own journey."
    </p>
    <h3>Jennifer's Tips for Success</h3>
    <ul>
      <li>Don’t wait for the perfect time to start the IsaBody Challenge – start now!</li>
      <li>It starts with baby steps toward a goal you set you yourself – look to make daily progress, and celebrate every
        triumph, big or small.</li>
      <li>The potential for everyone to achieve their goals is totally realistic. You have all the support in the world –
        you just have to reach out for it.</li>
    </ul>
    <h3>Jennifer's Favorite Products</h3>
    <ul>
      <li>Product B® IsaGenesis®</li>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getJudyLSuccessStory(): string {
    return `
    <h3>Top Achievers Finalist Discovers Confidence at 60</h3>
    <p>
      "Internally, I felt confident," shares Judy, a 2014 IsaBody Challenge Top Achievers Finalist. "But externally, I held back
      and was unsure of my actions, second guessing myself all the time."
    </p>
    <p>
      For the past 10 years, the Ontario native spent her time as a body-oriented psychotherapist. Helping others create strong
      mental health was a lifelong goal for Judy since childhood. But eventually, guiding individuals to work through
      their trauma got the best of her, despite Judy’s dream of caring for others.
    </p>
    <p>
      "I think the biggest part of the IsaBody Challenge has been the belief that you can do what you want to do to make a difference
      in the lives of yourself, your family and the people around and in the world at large," reflects Judy, now a
      2-Star Golden Circle, Executive. "Yet, once I started believing in myself and gaining strength through the Challenge,
      I saw that I could actually make a bigger change in the world."
    </p>
    <h3>Making the Change</h3>
    <p>
      Clearly, working in the world of distress took its toll on Judy, who was 5’5" and a size 12 at 138 pounds before discovering
      Isagenix in 2007.
    </p>
    <p>
      "I was emotionally and physically exhausted," says this mother of two and wife of 23 years to her husband, Jim. "Even with
      strong boundaries between work and family, I became moody, struggled with weight gain and knew that I was in trouble."
    </p>
    <p>
      Confiding in her friend, Dr. Rick, about her inner feelings, he gave Judy the tools toward a rejuvenated life. After introducing
      her to the 30-Day Cleansing and Fat Burning System, Judy released 22 pounds in five weeks.*
    </p>
    <p>
      "I felt great, but after using Isagenix for seven years, I still felt delicate inside," says Judy. "I knew that I needed
      to find my strength through confidence. I needed to physically ramp it up in order to show others what’s possible
      when you focus on healthy living and aging gracefully."
    </p>
    <h3>Dispelling a 'Myth'</h3>
    <p>
      Before turning 60 in August 2013, Judy decided to join the IsaBody Challenge. Now the lean 116-pound Judy is a size two*
      and has discovered her inner confidence through external strength.
    </p>
    <p>
      "I’m honored to be a finalist," says Judy. "What gave me the strength was the idea to dispel the myth that when you turn
      60, you’re starting to slow down. Somehow, being physically strong allowed me to recognize that this was the real
      me. This is the one that didn’t have to second guess herself."
    </p>
    <p>
      As a Top Achiever Finalist, Judy’s been awarded $3,000 cash, a trip for herself and a guest to 2014 Top Achievers, 2014 Celebration
      and a spot aboard the 2014 IsaBody Challenge Transformation Cruise.***
    </p>
    <p>
      "I feel like I’m an ambassador for the company since I became a finalist," reveals Judy. "I’ve had people turn to me and
      let me know that I inspire them—and to me, that is so powerful. It means that I have to live every single day to
      be the best that I can be."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Make a commitment.</strong> Tell everyone that you’re completing a goal. That way, there’s no turning back once
        you’ve said it out loud.</li>
      <li>
        <strong>Believe in yourself.</strong> You’ll always go through areas of self-doubt and diminishing willpower, but always
        believe that you can accomplish your goal.</li>
      <li>
        <strong>Stick to consistent and persistent action.</strong> Never give up and focus on what is possible.</li>
      <li>
        <strong>Find a partner to get you through this.</strong> My husband helped me through my last Challenge and then decided
        to get on board. I enjoy being a guide as to how he should approach the program.</li>
    </ul>
    <h3>Judy's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaDelight™</li>
      <li>IsaLean® Shakes</li>
      <li>Rejuvity® Essential Youth Serum™</li>
    </ul>`;
  }

  private getRandyFSuccessStory(): string {
    return `
    <h3>Marching To The Beat Of A New Drummer</h3>
    <p>
      Your world can change in an instant. Few know this as well as IsaBody Challenge® Finalist, Randy. "Unlike a lot of others,
      I didn’t struggle with my weight when I was growing up," confesses the retired 20-year Army veteran. "At least
      not at first."
    </p>
    <p>
      Randy recalls his youth. "I was always fit; I played football at Oklahoma State University. I had no desire to go into the
      military," he confesses, "but in the early 1970s, scholarship athletes had to be in ROTC. Thus after graduation,
      I entered the Army. I even served on General Schwarzkopf’s medical staff during Desert Storm."
    </p>
    <h3>Being All He Could Be</h3>
    <p>
      After the Army, Randy was recruited to take a job in the healthcare industry. "I took a position as a Managed Care Director
      for Colorado, Kansas and Oklahoma. He explains, "I was overqualified but took the job." Although Randy excelled,
      he shortly found out what "At Will" meant.
    </p>
    <p>
      Then, things took a turn.
    </p>
    <p>
      "After I was let go, I went into a downward spiral," Randy recalls, "I was devastated and it impacted my family." Life
      began to unravel. "Every subsequent year my waistline kept up with my age. I had a hard time functioning." Randy’s
      ongoing weight gain and health issues became a growing concern for his family.
    </p>
    <h3>A Turn for the Worse</h3>
    <p>
      With a new career as a mortgage broker and health obstacles mounting, Randy’s health–and morale–worsened. "Just getting out
      of bed and doing basic life activities exhausted me. My family feared I was heading for a heart attack."
    </p>
    <p>
      Never one to quit, Randy was determined to reshape his destiny. "I was eager to make some positive changes," he confides.
      "I needed to get my life back."
    </p>
    <h3>Enter: The Isagenix Cavalry</h3>
    <p>
      Concerned for his health, Randy’s wife suggested speaking to a friend. "Julie is a friend of my wife living in Florida. She
      recommended Isagenix." Isagenix was exactly what he was looking for. "The first time I tried the 30-Day Cleansing
      and Fat Burning System, I lost 29 pounds."* I was astonished by the results." Then, Randy discovered the IsaBody
      Challenge®.
    </p>
    <h3>Back to Basic Training</h3>
    <p>
      Randy excels at what he sets his mind to. "I’ve always been a top achiever. As an IsaBody Challenge Finalist," he beams,
      "my transformation transcended across my weight loss, healthy aging, and energy and performance goals. I now plan
      to transform my financial status by sharing Isagenix with everyone!"
    </p>
    <p>
      Randy’s self-esteem is back. "After NYKO, I’m ready!" He shares other milestones. "My workouts have more energy than ever.
      I have more confidence than I’ve had in years."
    </p>
    <p>
      Randy looks forward to building his Isagenix business. "When I work out, people come up and ask, ‘Is this really true or
      how are you doing this?’ I tell them, ‘Yes, it’s Isagenix.’" He wears a T-shirt with how much weight he’s released
      printed on it. "In the gym, others come up and share their struggles and tell me what an inspiration I am to them.
      I’m looking great and best of all," he says confidently, "I feel like a winner!"
    </p>
    <h3>Randy's Tips for Success</h3>
    <ul>
      <li>Make a decision and commit to your goals and dreams. Write them down and have them in realistic bite-sized chunks.
        I achieved my milestones 10 pounds at a time.</li>
      <li>Invest in yourself, not things! You can transform your life by using the products daily and following the time-proven
        system. The IsaBody Challenge keeps you accountable with a unified community that encourages success. Join us!</li>
      <li>Regardless of your age or the shape you are in, it’s never too late to start and it’s always the "right time"
        for Isagenix!</li>
    </ul>
    <h3>Randy's Favorite Products</h3>
    <ul>
      <li>e+™ Energy Shot</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse For Life®</li>
    </ul>`;
  }

  private getShelaghRSuccessStory(): string {
    return `
    <h3>Part-time Administrator Looks Fabulous at 50</h3>
    <p>
      After deciding to leave a very unhealthy relationship, Shelagh knew she needed time to rebuild her life and her self-esteem.
    </p>
    <p>
      Her best friend suggested Isagenix knowing its products’ ability to boost energy and endurance.
    </p>
    <p>
      "I said ‘no’ for the first few months," admits Shelagh. "I just couldn’t open up to it."
    </p>
    <p>
      During that time, her moods would fluctuate from high to low and her energy was completely deflated. She knew if she didn’t
      pull herself up, she would eventually lose her job as an administrator for a condominium developer.
    </p>
    <p>
      Coming to that realization opened Shelagh’s mind to trying Isagenix.
    </p>
    <h3>Opening Up To Isagenix</h3>
    <p>
      "By my third day on the Pacesetter Pak I was already feeling more motivated and uplifted," shares Shelagh. "I felt positive
      and full of energy, but I knew I needed all the support I could get to follow through."
    </p>
    <p>
      So, she also signed up for the IsaBody Challenge®.
    </p>
    <p>
      "It was a 16-week goal and I couldn’t give up," explains Shelagh, "because I knew other people were doing it too."
    </p>
    <p>
      Within her first few weeks on the products, Shelagh released 10 pounds* and felt healthier and stronger than she had in a
      while.
    </p>
    <p>
      Once she saw what the products could do for her body, she was open to meeting the people of Isagenix and attended an opportunity
      meeting in Toronto. Inspired, she embarked on a new journey, building an Isagenix business, and decided to use
      the Challenge as her platform.
    </p>
    <p>
      While her success was fast moving, one thing still lingered in her mind.
    </p>
    <h3>Finishing What You Start</h3>
    <p>
      "I wrote in my first Challenge essay that ‘I’m considering a Figure Competition at 50, fueled by Isagenix,’" shares Shelagh.
    </p>
    <p>
      With that goal still in limbo, she entered her second Challenge and set a firm goal to compete in a figure competition in
      May of 2014.
    </p>
    <p>
      In addition to her daily Isagenix products, Shelagh added extra Ionix® Supreme, Product B®, omega-3 essential fatty acids,
      Isagenix Greens!™ and IsaPro® for a boost in nutrition.
    </p>
    <p>
      "What I began to notice was that even though I had not weight trained in over five years, I was astounded by how much I could
      lift," admits Shelagh, "how fast I recovered from my workouts, how much energy I still had, and how balanced
      I felt."
    </p>
    <h3>Fabulous at 50</h3>
    <p>
      In total, Shelagh ended up releasing 35 pounds since starting her Isagenix journey and whittled her waist line to slip into
      a size zero pair of jeans.*
    </p>
    <p>
      She also fulfilled her original goal, taking second place in her category at the fitness competition proving she could look
      fabulous at 50!
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li><strong>Know your "why."</strong> Ask yourself why you are joining the Challenge and write down a powerful "why".</li>
      <li><strong>Get social.</strong> Get tapped into Facebook groups and the IsaBody Challenge podcasts.</li>
      <li><strong>Have a support team.</strong> Announce that you have joined the Challenge to your family and friends so they support you.</li>
      <li><strong>Keep it simple.</strong> Do things in moderation—sleep, nutrition and exercise.</li>
    </ul>
    <h3>Shelagh's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake</li>
      <li>Ageless Essentials™ with Product B®</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getThaiLSuccessStory(): string {
    return `
    <h3>Third Time’s the Charm for Thai’s Transformation</h3>
    <p>
      At 5’1", Thai often blended into the background. Something he didn’t mind, especially since he wasn’t 100 percent comfortable
      with his body. "Any extra pound looks like five on my frame," he shares. At a starting weight of 148 pounds,
      Thai was healthy and athletic, but his physique was far from ideal.
    </p>
    <p>
      He routinely worked out hard and even drank protein shakes, but he didn’t have a solid system and he wasn’t seeing lasting
      results. At 40, his athletic endeavors—like two-day volleyball tournaments and 10k races—left him exhausted and
      sore.
    </p>
    <h3>Starting the System</h3>
    <p>
      In 2011, Thai was introduced to Isagenix with the 9-Day Cleansing and Fat Burning System. He was about to go on vacation
      and wanted to trim down. The system helped him shed some torso fat and reveal the abs underneath. His success led
      him to try a 30-Day Cleansing and Fat Burning System and eventually the Energy and Performance System. He knew
      Isagenix worked for him, he’d even entered the IsaBody Challenge a few times, but it wasn’t until this year that
      he actually completed a Challenge. For him, his third try was the charm.
    </p>
    <h3>Seeing Results</h3>
    <p>
      Thai went into his third IsaBody Challenge determined (and prepared) to succeed. He created a vision board to help him stay
      focused on his goal, checked in with Barbara (his Isagenix mentor) weekly and scheduled everything. Every day Thai
      knew how many days were left in the Challenge, when he needed to eat and what he’d be doing for a workout.
    </p>
    <p>
      It all paid off. Thai earned a spot as one of the top five Celebration IsaBody Challenge finalists. He’ll appear onstage
      at our 2014 Celebration event as one of 15 finalists who could win the Grand Prize, valued at over $25,000.
    </p>
    <p>
      But that’s not all Thai’s won. He’s more confident than he’s ever been. He has more energy and recovers faster than he ever
      has (and faster than some of his younger teammates). He’s started an Isagenix business and is enjoying meeting
      new people and sharing the products that fueled his success. Thai also took on something new. He competed in his
      first-ever bodybuilding competition where he placed sixth, among competitors that, in some cases, have been training
      for years!
    </p>
    <p>
      "I noticed that people backstage at the competition who weren’t using Isagenix were tired and cranky," Thai recalls. He,
      on the other hand, "was full of energy, feeling good and ready to go." And, that’s the way he feels every day,
      thanks to Isagenix.
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Use the System.</strong> The system works. Trust it and use it consistently.</li>
      <li>
        <strong>Don’t Go it Alone.</strong> You need a support system to successfully complete the Challenge. It really helps
        to work with someone who has completed the Challenge. Check in regularly and share your success as you go!</li>
      <li>
        <strong>Visualize Success.</strong> To be successful, you must first have a goal to work toward. Create a vision board
        that captures your personal goals so you can envision the outcome of the challenge.</li>
      <li>
        <strong>Stick to a Schedule.</strong> The IsaBody Challenge is only 16 weeks long. Create and stick to a schedule (eating,
        working out, etc.) so you can stay on track to complete the Challenge and achieve your goals.</li>
    </ul>
    <h3>Thai's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials with Product B®</li>
    </ul>`;
  }

  private getWillASuccessStory(): string {
    return `
    <h3>‘Will’ Power Made the Difference</h3>
    <p>
      "As a kid, I was overweight," shares Will. "In high school, I played baseball—overweight. It wasn’t until I was 16 years
      old that I really started to take an interest in diet and exercise."
    </p>
    <p>
      His determination to fit in and shed those unwanted pounds provided him with a platform to rely on himself and become his
      own teacher.
    </p>
    <p>
      "I went on to play college baseball," adds Will. "That opportunity allowed me to focus on my nutrition and uncover my true
      passion: health and wellness."
    </p>
    <p>
      With health and fitness at his very core, Will embarked on a new journey and entered the realm of bodybuilding.
    </p>
    <h3>Falling Off Track</h3>
    <p>
      "I wanted to compete in bodybuilding, not to become a bodybuilder," explains Will, "but, to be a fitness role model to others."
    </p>
    <p>
      Over the next year and a half Will competed in eight men’s physique competitions, which required he eat six times a day.
    </p>
    <p>
      "Your diet regimen is insane," shares Will. "It’s an unrealistic lifestyle."
    </p>
    <h3>Eventually Something Had to Give</h3>
    <p>
      "I needed a break," explains Will. "I needed a couple of months to mentally regroup. I was overworked, overtired, and over
      my extreme dieting. That’s when it all came back—all the body fat I had worked so hard to lose."
    </p>
    <p>
      Coincidently, Will’s friends had just shared Isagenix with him.
    </p>
    <h3>Powered By Others</h3>
    <p>
      "Because I give everything a chance, I agreed to look into the company," shares Will. "I looked into the science, checked
      out the ingredients and perused the products; and, because I really trusted those I surround myself with, I decided
      to put the stuff to the test."
    </p>
    <p>
      With that, he decided to train for another competition and use Isagenix products to prepare.
    </p>
    <p>
      "I was going to push these products to the limit and test them on myself," laughs Will.
    </p>
    <p>
      He started with the IsaPro®. Then, he slowly added in Ionix® Supreme.
    </p>
    <p>
      "I was doing two meals and two meal replacement shakes with either IsaLean® Pro or IsaPro every day," says Will. "I also
      did a few Cleanse Days."
    </p>
    <h3>Customized Success</h3>
    <p>
      Because of the high daily protein intake Will needed to sustain training, he customized his program, yet still adhered to
      two shakes a day. He also joined the IsaBody Challenge®.
    </p>
    <p>
      "The typical 30-Day Cleansing and Fat Burning System wasn’t enough food for me. I needed more," explains Will. "Plus, it
      typically takes 16 weeks to prepare for a national level competition; and the Challenge is 16 weeks. I though it
      was the perfect way to hold myself accountable."
    </p>
    <p>
      By the time Will stepped on stage to compete in the men’s physique category he had chiseled out his physique. He also released
      31.9 pounds* since joining Isagenix.
    </p>
    <p>
      He was so impressed with his results he couldn’t stop talking about the products and decided to take advantage of the business
      opportunity with his girlfriend and current 2014 Miss Arizona title holder, Savanna Troupe.
    </p>
    <p>
      "The biggest difference between training now versus in the past has been the convenience of the products," shares Will, "and,
      to be able to introduce something as convenient as an Isagenix system has been a game changer for me and most of
      my clients."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Have fun.</strong> Have fun and enjoy the goal you are trying to attain. Find an exercise that you like and find
        enjoyable. Everybody’s goals are different.</li>
      <li>
        <strong>Stick with it.</strong> Find something convenient to follow; it’s a lifestyle change not a diet.</li>
      <li>
        <strong>Take action.</strong> Stop planning and preparing, just start!</li>
    </ul>
    <h3>Will's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
      <li>e+™</li>
    </ul>`;
  }

  private getAaronHSuccessStory(): string {
    return `<h3>Former Football Player Makes the Cut With Isagenix</h3>
    <p>
      Aaron is a team player. Four Minor League football championships and his prestigious inclusion in the 2009 Minor League Football
      Hall of Fame prove it.
    </p>
    <p>
      After an injury forced him to retire in 2009, he went on to become a full-time computer engineer. He’s also the former head
      coach of the 2-Time Champion Connecticut Bearcats.
    </p>
    <p>
      And, while Aaron was still maintaining a very active lifestyle, he was out of shape and needed to fix it.
    </p>
    <p>
      That’s when Aaron’s brother Trevor introduced him to Isagenix®.
    </p>
    <h3>A True Believer</h3>
    <p>
      "My brother was adamant about sharing the products," laughs the father of one.
    </p>
    <p>
      But, before Aaron would commit to ordering a 30-Day Cleansing and Fat Burning System, he wanted to better understand the
      nutritional benefits of the products.
    </p>
    <p>
      "I admit I was impressed," adds Aaron. "But I was still very skeptical what the products could do for my body.
    </p>
    <p>
      What made Aaron a true believer was Ionix® Supreme and IsaLean® Pro.
    </p>
    <p>
      "I tried it and couldn’t believe how quickly my body recovered from a workout," shares the Connecticut resident. "Let’s face
      it, as you get older, it takes longer to recover, I wish I had this when I was playing ball.”
    </p>
    <h3>Becoming a Product of the Product</h3>
    <p>
      That experience solidified Aaron’s decision to make good on three additional commitments: joining the IsaBody Challenge®,
      competing in his first-ever Regional Fitness America Model Championships and sharing these amazing nutritional products
      with the world.
    </p>
    <p>
      Working out 45 minutes a day, and working with his company The Body Lab–Aaron increased lean muscle mass and chiseled his
      physique. He also went from a 36-inch waist to a 29-inch waist.*
    </p>
    <p>
      His jaw-dropping transformation wowed everyone around him, including the Isagenix judges, earning him the title of 2013 IsaBody
      Challenge Celebration Finalist. He also won first place in the Regional Fitness America Model Championships held
      at Foxwoods Casino.
    </p>
    <p>
      Now this "product of the product" has everyone asking how he did it which, in turn, has ignited his Isagenix business.
    </p>
    <p>
      "The business is just starting to take off," says Aaron. "Most jobs require you to check in and check out, swapping time
      for money. The idea that you can work this business no matter where you are in the world is the biggest perk.”
    </p>
    <p>
      Now his earned Isagenix income is helping him cover his product costs and fuel his Isagenix business.
    </p>
    <p>
      "As a kid I didn’t have a lot," shares Aaron. "Isagenix gives me and my family the chance to create a little cushion, go
      on vacation and spend more quality time together. It’s priceless.”
    </p>
    <h3>Aaron's Tips for Success</h3>
    <ul>
      <li>Keep God in the middle of all you do.</li>
      <li>Set goals and don’t let negativity steer you away.</li>
      <li>Surround yourself with people more successful than you.</li>
      <li>Help others to be the best that they can be.</li>
    </ul>
    <h3>Aaron's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaPro®</li>
      <li>Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>e+™</li>
    </ul>`;
  }

  private getAngieTSuccessStory(): string {
    return `
    <h3>Isagenix Helps Stay-At-Home Mom Regain Balance</h3>
    <p>
      Angie was always a go-with-the-flow kind of girl who rarely got ruffled by life. But when an unexpected challenge arrived
      with her five-year-old daughter, everything changed.
    </p>
    <p>
      From an early age, Angie could see that her daughter was struggling developmentally, but didn’t know why or what was causing
      it. She spent her days and nights pouring over literature and research, worrying, wondering and speculating as to
      what it could be. Finally, Angie’s daughter was diagnosed with Developmental Coordination Disorder.
    </p>
    <p>
      She also had a restrictive diet because of sensitivities to a number of foods which required Angie to prepare organic meals
      three times daily for her daughter, while caring for her family of four.
    </p>
    <p>
      Inevitably, Angie’s stress levels began to skyrocket and she began burying her worries in food, resulting in a very unhealthy
      diet—and lifestyle.
    </p>
    <p>
      "My days started with coffee, then around noon a diet soda, coffee again around 4 p.m. and wine by 5 p.m.," shares Angie.
    </p>
    <p>
      "I had become a hypocrite," she adds. "I was getting accolades for being a healthy cook for my daughter yet I wasn’t eating
      healthy."
    </p>
    <p>
      As her stress climbed, so did her weight.
    </p>
    <h3>The Turning Point</h3>
    <p>
      "I knew I needed to change," shares this Calgary resident. "I wanted to change; I just didn’t know where to start."
    </p>
    <p>
      Thanks to a play date with a former coworker, Angie was introduced to Isagenix for the first time.
    </p>
    <p>
      That day Angie ordered her first of many 30-Day Cleansing and Fat Burning Systems and enrolled in the IsaBody Challenge®.
    </p>
    <p>
      She also learned about the Isagenix business opportunity and decided she was going to help supplement her family’s income
      by also sharing Isagenix.
    </p>
    <p>
      In between taking the kids to school and going to the gym, Angie began opening her home to share Isagenix with other moms.
    </p>
    <p>
      "I just share my story," she says. "It’s about fun. It’s what women thrive off of. It’s about social gatherings, feeding
      off of each other’s stories, listening and sharing—not just the negative, but the triumphs as well."
    </p>
    <h3>Sharing Her Story—and Her Success</h3>
    <p>
      Her willingness to share her story is quickly catapulting her business—and her life—forward.
    </p>
    <p>
      Today, this 2013 IsaBody Challenge finalist is in the best shape of her life; she’s lost 38 pounds,* and traded her size
      10/12 dress for a size 2/4.*
    </p>
    <p>
      She’s also propelled her business and is a Crystal Manager.
    </p>
    <p>
      "This business doesn’t require you to work eight hours a day," shares Angie. "It doesn’t even require that you leave your
      home. You can put in as much as you want to get out of it."
    </p>
    <p>
      By working a few hours each day, Angie and her husband can afford to send their daughter to private school and save for future
      family vacations. Angie’s husband, Corey, was treated to a set of golf clubs thanks to his IsaWallet®.
    </p>
    <p>
      "I wasn’t expecting the success with the business," shares Angie. "It has changed our lives in so many ways."
    </p>
    <p>
      "Financial rewards are wonderful," explains Angie. "But, I have the opportunity to not only meet and affect women’s lives,
      but lots of people’s lives."
    </p>
    <p>
      Being a former Challenge participant also adds credibility to Angie’s story when discussing Isagenix with new Associates.
      Not only can she share her experiences, but she has access to a huge network of former participants who love to share
      their inspirational stories too.
    </p>
    <p>
      A perk she also makes available to her team.
    </p>
    <p>
      "Things that we never thought possible are now becoming possible. I am finally the role model my children deserve,” says
      Angie.
    </p>
    <h3>Angie’s Tips for Success</h3>
    <ul>
      <li>Broadcast your intentions loud and clear.</li>
      <li>Write an accountability letter to yourself and your family.</li>
      <li>Never forget your "why.”</li>
      <li>Have a plan, get organized and stay focused.</li>
    </ul>
    <h3>Angie’s Can-Do List of Products</h3>
    <ul>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getBelindaSSuccessStory(): string {
    return `<h3>Louisiana Mother Uses Challenge to Rebuild Her Life</h3>
    <p>
      Belinda knows that life can change in an instant because it happened to her. In 2004, her husband was suddenly diagnosed
      with inoperable stomach cancer and given six months to live.
    </p>
    <p>
      At the time, she had two young sons and had just started building her Isagenix® business.
    </p>
    <p>
      Eight years and many stressful events later, the petite mother of two found herself standing in front of a mirror screaming
      at the reflection staring back at her.
    </p>
    <p>
      "I weighed 205 pounds and had two butts," jokes the Louisiana native. "I was so focused on my kids that I’d forgotten about
      myself."
    </p>
    <p>
      Luckily, Belinda had been involved with Isagenix for nine years and was familiar with the IsaBody Challenge®. She admits
      that she mostly used it in the past to help promote her business.
    </p>
    <p>
      "I hated working out," admits Belinda. "But, I knew if I wanted to change, I had to start there."
    </p>
    <p>
      Her first course of action was getting a trainer.
    </p>
    <p>
      As fate would have it Belinda quickly discovered a trainer lived less than a mile from her house while driving home from
      work. So, she took action and made an appointment to meet him.
    </p>
    <p>
      "We talked about my goal of winning the Challenge and agreed upon weekly workouts," shares Belinda.
    </p>
    <p>
      Now, change took precedence on Belinda’s daily "to-do" list. Starting with the 9-Day Deep Cleansing and Fat Burning System
      and then transitioning to the 30-Day Cleansing and Fat Burning System, Belinda signed up for the Challenge and hit
      the gym regularly.
    </p>
    <p>
      Over her 24-week journey, she released a total of 50 pounds* and whittled her waistline from a size 16/18 to a size 5/6.*
    </p>
    <p>
      As she moves forward as a newfound woman, she plans to focus on her business, return to Paid-As Executive, and help others
      overcome self doubt.
    </p>
    <p>
      "When my husband died, we lost everything. I had to file for bankruptcy and I knew it was only a matter of time until my
      house went into foreclosure," shares Belinda. "I had two kids and only $8 to my name, but I knew at the right time,
      when I was able to give my Isagenix business 110 percent it would be the tool to rebuild my life."
    </p>
    <h3>Belinda's Tips for Success</h3>
    <ul>
      <li>Decide and commit mentally to succeed by setting realistic goals. I visualize my body transforming and ultimately
        achieving a lifestyle change to be fit for life.</li>
      <li>Be diligent in using the 30-Day System™ to achieve optimum results. I found the system to be flexible and the products
        convenient for my lifestyle. I always have IsaLean® Pro, an IsaLean® Bar, IsaDelight Plus™, FiberSnacks!™ or Isagenix
        Snacks!™ on hand.</li>
      <li>Drink lots of water. Drink one to two glasses prior to eating each meal. I drank a minimum of one gallon daily.</li>
      <li>Exercise daily—a minimum of 30 minutes of cardio four days a week.</li>
    </ul>
    <h3>Belinda's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake in Creamy Dutch Chocolate</li>
      <li>IsaDelight Plus™ in Milk and Dark Chocolate</li>
    </ul>`;
  }

  private getBrandonCSuccessStory(): string {
    return `<h3>Fitness Trainer Gains an Edge with Isagenix</h3>
    <p>
      Brandon’s a personal trainer with a "who’s who" client list of North York, Toronto.
    </p>
    <p>
      Early morning wake-up calls, grueling workouts, and eating right are all part of his strict daily regimen; there’s nothing
      that he will ask his clients to do that he wouldn’t do himself.
    </p>
    <p>
      So, when he was offered the chance to try the 30-Day Cleansing and Fat Burning System with IsaLean® Pro and share the opportunity
      with others, he couldn’t resist.
    </p>
    <p>
      But, before Brandon could start experiencing the same transformations he’d heard about, he decided to add a few additional
      targeted solutions to his system to boost his energy and performance: Isagenix Greens!™ and an extra bottle of Ionix®
      Supreme. Then, he joined the IsaBody Challenge® as added accountability.
    </p>
    <p>
      "As someone who is fairly fit on a consistent basis, I always like having a goal and sticking to that goal to really dial
      in nutrition and training," shares the Ontario native. "It helps to push myself and see what my body can accomplish."
    </p>
    <p>
      After eight fully focused weeks of nonstop workouts and clean eating, Brandon started to notice a significant improvement
      in his overall body composition and muscle definition.
    </p>
    <p>
      "By week 12, I had more energy, was less stressed and was sleeping through the night," shares the first-ever IsaBody Challenge
      Energy and Performance Solution Category winner.
    </p>
    <p>
      But, the true proof came on October 21 when Brandon competed in his first-ever fitness competition and won second prize.
    </p>
    <p>
      "Since the Challenge, I have kept the same protocol as when I was in the Challenge," admits Brandon. "Like going to bed
      at 10:30 p.m. every night."
    </p>
    <p>
      Months later, Brandon is proud of his achievements, including clinching a first-place finish at another fitness competition,
      his ultimate goal.
    </p>
    <h3>Brandon's Tips for Success</h3>
    <ul>
      <li>Doing weekly deep cleanses.</li>
      <li>Getting 7 to 8 hours of sleep a night.</li>
      <li>Exercising a minimum of 20 to 30 minutes every day.</li>
      <li>Mixing Isagenix Greens! with every IsaLean Pro Shake.</li>
    </ul>
    <h3>Brandon's Favorite Products</h3>
    <ul>
      <li>French Vanilla IsaLean® Pro</li>
      <li>Isagenix Greens!™</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>IsaFruits®</li>
    </ul>`;
  }

  private getCarolGSuccessStory(): string {
    return `<h3>Retired Teacher Proves Age is Just a Number</h3>
    <p>
      Carol was an avid runner and cyclist. In fact, some of her fondest memories were participating in 5k’s and all-day bike rides
      with her family. But one thing that was not a constant for Carol was the number on the scale.
    </p>
    <p>
      By 58, she was 40 pounds overweight and struggling with her health.
    </p>
    <p>
      "Maybe I was enjoying life a little too much," jokes Carol, a retired special education teacher.
    </p>
    <p>
      And, while the road to making a healthy recovery looked promising, Carol was intimated by the thought of losing weight. Over
      the years, she had tried almost every diet on the market and had never really experienced lasting success.
    </p>
    <p>
      "I remember thinking, ‘My gosh here I am; I am about to turn 60 in two years and my life was going down hill,’" admits
      Carol.
    </p>
    <p>
      Luckily, a few days after learning the extent of her health challenges, she heard an Isagenix® radio ad and decided to look
      into the company. After learning about the products’ nutritional benefits and reading several success stories, this
      teacher decided to become the student and try the 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      Much to her surprise she released 17 pounds* and 36 inches* off of her body within her first few months with Isagenix.
    </p>
    <p>
      "I woke up one morning and said ‘this works!’ I want more," remembers Carol.
    </p>
    <p>
      She even decided to attend 2012 Celebration in Phoenix, Arizona—that’s also when she learned about the IsaBody Challenge®
      and immediately signed up.
    </p>
    <p>
      By the end of Carol’s Challenge, she had released 30 pounds* and whittled her waistline from a size 14 to a size 4.* Her
      favorite part? Looking years younger!
    </p>
    <p>
      "Isagenix is my key to ageless beauty," she says.
    </p>
    <p>
      Thanks to her stunning transformation, she became the first-ever IsaBody Challenge Healthy-Aging Solution Winner, won a $1,000
      cash and the chance to win a spot aboard the IsaBody Challenge® Transformation Cruise.
    </p>
    <h3>Carol's Tips for Success</h3>
    <ul>
      <li>Check in daily with your coach, especially in the beginning, and don’t be afraid to ask questions. Plus, learn successful
        tips to make weight loss more fun!</li>
      <li>Customize a playlist for your iPod or MP3 player. Choose music that’s peppy and upbeat.</li>
      <li>Make a vision board with pictures and phrases that help inspire your weight loss and fitness goals. It’s helpful
        to glance at it first thing in the morning, while setting your intention for the day, and then again before bed.</li>
      <li>Take Ageless Essentials™ with Product B™ daily. It’s all right there in convenient A.M./ P.M. packets and it takes
        the guesswork out of nourishing your body daily.</li>
    </ul>
    <h3>Carol's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ageless Renewal Serum</li>
      <li>IsaDermix® Intensive Renewal Night Cream</li>
    </ul>`;
  }

  private getCarolyneRSuccessStory(): string {
    return `
    <h3>Isagenix Millionaire Leads by Example with the IsaBody Challenge</h3>
    <p>
      Carolyne, an Isagenix Millionaire, found that her claim to fame has always been her commitment to consistent, persistent
      action. Her small steps repeated over time allowed her to have the success she has today.
    </p>
    <p>
      Over time however, Carolyne discovered that this attribute was missing in one part of her Isagenix life—exercise. Although
      Carolyne diligently incorporated Isagenix products into her lifestyle, she never fully committed, or felt the motivation
      to work out. After signing up for the IsaBody Challenge® eight times, and never completing, Carolyne decided in January
      of 2013, it was time for a new body.
    </p>
    <p>
      "I entered the Isa Body Challenge, this time with an intention and commitment to complete it and have my ‘after’ picture,"
      said Carolyne.
    </p>
    <p>
      "What would be different this time?" she adds, "my integrity."
    </p>
    <h3>Overcoming Challenges</h3>
    <p>
      For three months Carolyne did not see results with her workout routine, but she persevered, and continued with her commitment
      to complete the Challenge. She knew that the results would come in time if she did not give up on herself. When things
      got tough, she drew her inspiration from within and found motivation to help others.
    </p>
    <p>
      "I believe that many people do not complete the Challenge because they lose their focus and don’t have a big enough ‘why,’"
      says Carolyne. "My focus was on donating any money I won to folks whose lives would be changed through the work my
      cousin, a renowned doctor, does to repair the damage of leprosy. Seeing those young children battling leprosy, in
      my mind helped propel me through tough workout days."
    </p>
    <h3>How Her Lifestyle Changed</h3>
    <p>
      After completing the Challenge, Carolyne had not only gained a much healthier lifestyle but she was able to donate $1,000**
      to her cousin’s hospital.
    </p>
    <p>
      She is now stronger and leaner and feels so much better about her body image. She wants to encourage others to embrace the
      IsaBody Challenge.
    </p>
    <p>
      "I am proud of finishing and being an example to others on my team," shares Carolyne. "I want them to know that they can
      be finishers too! I am encouraging my team to embrace the IsaBody Challenge and to do it with their team members!
      I want more people to have that ‘after’ picture," Carolyne says.
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Stay in the game. Giving up is not an option!</li>
      <li>Plan your schedule for the week.</li>
      <li>Surround yourself with mentors and like-minded people</li>
    </ul>
    <h3>Carolyne's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Shake</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getChrisBSuccessStory(): string {
    return `
    <h3>Chef Puts Healthy Living Back On The Menu</h3>
    <p>
      Simply put, Christopher was not taking care of himself. After working long hours every week, this restaurant owner and chef
      found himself exhausted, with no energy. However, Christopher also found he could not get a good night’s sleep. After
      Christopher’s wife, Dawn, was introduced to Isagenix, Christopher was hesitant to commit to the products.
    </p>
    <p>
      "I had to get my mind in the right spot. It wasn’t until I went on a hike, weighing 311 pounds, that I realized how terrible
      I felt," says Christopher.
    </p>
    <p>
      Soon after, Dawn ordered Christopher a 30-Day Cleansing and Fat Burning System.
    </p>
    <h3>Christopher’s Motivation</h3>
    <p>
      Christopher had many components in his life motivating him to continue his weight-loss journey. In fact, one of the main
      reasons he decided to begin the journey was for his 19-year-old daughter.
    </p>
    <p>
      "I knew I wanted to walk her down the aisle one day," says Christopher.
    </p>
    <p>
      "My motivation was to stay healthy for my kids. So the day after Thanksgiving, I started," he adds.
    </p>
    <p>
      Another source of motivation for Christopher came from those he inspired along the way. As Christopher began to lose the
      weight, he realized he was carrying a torch for others. His weight-loss journey became a source of motivation for
      other people in his life, and soon enough, Christopher realized that his success was not tied to himself, but tied
      to the people he inspired along the way.
    </p>
    <h3>The True Recipe for Success</h3>
    <p>
      Christopher shared that if he, an Italian restaurant owner, could be successful, anyone could.
    </p>
    <p>
      "Food is a part of my culture and lifestyle. I am surrounded by it daily!"
    </p>
    <p>
      "After our daughter’s ‘Fathers’ Weekend’ at College I was amazed and ashamed of what I had become," says Christopher. "Now
      my life has changed dramatically. People do not even recognize me and my IsaBody!’"
    </p>
    <p>
      "If you want to do it (lose weight), you’re going to do it," says Christopher.
    </p>
    <p>
      Christopher now makes time for what is important. He shares, "Being a chef, Isagenix has given me the recipe for success.
      It’s a simple plan to follow. I have great results and I’m feeling good."
    </p>
    <h3>Next Steps</h3>
    <p>
      Christopher, who has lost more than 100 pounds* with Isagenix, isn’t losing momentum. Although he is close to reaching his
      health goals, he has a bright outlook for his financial future as well. "My wife and I are growing a really strong
      team right now," he says. "We are working with more couples sharing both the health and wealth aspects of Isagenix.
      We plan to take our business to the next level by working with those couples and helping them understand what it
      takes to succeed. We hope to share with them how they can get their products paid for and further than that, share
      with them how to grow a successful team."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Take it one day at a time. Use your tools and follow the program. No excuses!</li>
      <li>Stay hydrated. Drink water and then drink some more water!</li>
      <li>Be accountable. It is not just about you anymore. It is about all the people who have joined in your journey and
        how you have affected their lives. Be a product of the products!</li>
    </ul>
    <h3>Chris' Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake</li>
      <li>e+™</li>
    </ul>`;
  }

  private getDrDavidNSuccessStory(): string {
    return `<h3>Avid Marathoner Crosses the Finish Line to Better Health</h3>
    <p>
      It’s hard to think of someone living in pain for a day or two, let alone 30 years. For Dr. David N. that was everyday life.
    </p>
    <p>
      He had suffered a major neck injury playing football in his early 20s, but that never stopped this avid athlete from competing.
      After football, he went on to become a champion bodybuilder and professional trainer. He enjoyed being in peak performance;
      the pain was ancillary when it came to getting in shape.
    </p>
    <p>
      His other passion was nutrition. Dr. David only fueled his body with the best nutrition or what he thought was good nutrition
      at the time.
    </p>
    <p>
      By his 40s, Dr. David was a highly respected chiropractor in California and an avid marathon runner and triathlete. He had
      taken almost every product on the market promoting good health until a client of his introduced him to Isagenix®.
    </p>
    <p>
      Over the next three years, he would become a faithful product user, fine tuning his already fit physique and beating his
      best running times. When clients asked what his secret was, he’s shared, slowly growing his Isagenix business.
    </p>
    <h3>A Hurdle in the Road</h3>
    <p>
      Life was great. He was healthy and pain free most days until one September day.
    </p>
    <p>
      "I experienced excruciating pain in my neck, down my arm and was losing strength and function of my hand," shares Dr. David.
      "My hand was going numb and I found writing and even holding a pen difficult."
    </p>
    <p>
      After years of battling through the occasional pain, Dr. David was forced to finally address and rectify the problem.
    </p>
    <p>
      "I knew what I would need in my body for rebuilding and healing and I had total faith in the Isagenix products," adds Dr.
      David.
    </p>
    <p>
      So, he focused on fueling his body with his favorite Isagenix products. He also joined the IsaBody Challenge®. Joining the
      Challenge forced him to concentrate on getting stronger. Plus, he was turning 50.
    </p>
    <p>
      "I didn’t want to be an old 50-year-old," jokes Dr. David.
    </p>
    <h3>Striding to Success</h3>
    <p>
      At the end of Dr. David’s 16-week journey he achieved several milestones. He had lost 15 pounds,* gained several pounds of
      lean muscle, turned 50, hiked the Grand Canyon from top to bottom and back in less than 10 hours, and competed in
      the Redondo Beach Triathlon and San Francisco Half-Marathon.
    </p>
    <p>
      He was celebrating his health by competing athletically and pain free.
    </p>
    <p>
      "The nutrition made the difference and helped to transform my life," shares the 2013 IsaBody Challenge Celebration Healthy
      Aging Solution Category Winner.
    </p>
    <p>
      The Challenge also helped to catapult his Isagenix business.
    </p>
    <p>
      "Having never been a network marketer there was, and still is, a big learning curve," shares the 1-Star Golden Circle and
      Executive. "I’m using the Challenge as a platform to recruit and motivate."
    </p>
    <p>
      He and his family are also experiencing the benefits of residual income and the time freedom it is affording him. As a result,
      Dr. David is contemplating a big business move—retiring to focus solely on his Isagenix business.
    </p>
    <p>
      "I’m grateful for these products and for the opportunity to be rewarded financially for sharing them," he says.
    </p>
    <h3>Dr. David’s Tips for Success</h3>
    <ul>
      <li>Work out at the same time daily…preferably mornings.</li>
      <li>Consume your shake immediately after your workouts.</li>
      <li>Be consistent with your regimen throughout the week and allow yourself a cheat meal on weekends.</li>
      <li>Live in gratitude for the things you have and for the things coming to you in your life.</li>
    </ul>
    <h3>Dr. David’s Favorite Products</h3>
    <ul>
      <li>Natural Vanilla IsaLean® Pro with IsaFruits® Packets and Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Natural Oatmeal Raisin IsaLean Bars</li>
      <li>e+™</li>
    </ul>`;
  }

  private getEmilySSuccessStory(): string {
    return `<h3>Personal Trainer Uses Challenge to Prep for Big Day</h3>
    <p>
      Emily, like many young adults, enjoyed unhealthy treats and energy drinks. When her fitness coach suggested she start limiting
      her sugar intake, Emily felt like she craved sugar even more.
    </p>
    <p>
      "I began drinking sugar-free energy drinks and eating sugar free Jell-O…diet cola, you name it. If it was sugar free and
      diet, I wanted it," shares Emily.
    </p>
    <p>
      Emily soon realized that her body was struggling to lose weight. It wasn’t until she switched fitness coaches and swapped
      her calorie-restrictive diet for an Isagenix lifestyle, that she really saw her body completely transform.
    </p>
    <h3>Why Emily Joined the IsaBody Challenge</h3>
    <p>
      At first Emily thought that the IsaBody Challenge® was only for those with a bunch of weight to lose.
    </p>
    <p>
      "For someone like me that has to lose 5 to 10 pounds, I didn’t see the purpose because I didn’t think I could win," said
      Emily.
    </p>
    <p>
      It wasn’t until she saw the "before" and "after" pictures of the 2012 IsaBody Finalist Elizabeth M. that she realized
      the Challenge wasn’t just for weight loss.
    </p>
    <p>
      "I started to think that really anyone can do it, and then it clicked. I decided to use the IsaBody Challenge to get ready
      for my wedding," shares Emily.
    </p>
    <p>
      Emily, who had become so stressed during her wedding planning process, gained 15 pounds, and in doing so, her wedding dress
      no longer fit. Emily not only slimmed back down to fit into her dress on the big day, but has since been able to
      maintain her ideal weight.
    </p>
    <h3>Emily’s Motivation</h3>
    <p>
      Emily admits that although she began the Challenge to fit back into her wedding dress, her motivation to keep working out
      and get healthy started to come from other, unexpected, sources.
    </p>
    <p>
      "I shared my progress over social media. At first I was nervous to share my ‘before’ pictures, I’ll admit, I was even embarrassed.
      But I wanted to inspire people, and show them that even personal trainers can get off track."
    </p>
    <p>
      By sharing her story, Emily found new inspiration every day along her IsaBody™ journey.
    </p>
    <h3>What’s Next?</h3>
    <p>
      Emily plans to keep entering the IsaBody Challenge, not with the grand prize in mind, but as a tool to keep herself accountable.
      Emily explains, "I want to maintain a balance."
    </p>
    <p>
      Emily also shared that she’s enjoyed building her business, sharing her recipes and developing coaching videos to help her
      clientele.
    </p>
    <h3>Emily's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Cleanse for Life®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getGiovanniRSuccessStory(): string {
    return `<h3>Proud Grandfather Loses 100 Pounds</h3>
    <p>
      Isagenix Manager, Giovanni R. was 49 years old when he found Isagenix®. He was in poor health and weighed 320 pounds. He
      had just undergone knee-replacement surgery and was raising his two grandchildren (then 4 and 7 years old). He knew
      his knee was only the tip of the iceberg when it came to his health; if he didn’t make a change, he knew he wouldn’t
      live to see them graduate.
    </p>
    <h3>Why Isagenix?</h3>
    <p>
      When his physical therapist Mark J. introduced him to Isagenix, he had his doubts.
    </p>
    <p>
      "I was skeptical because, like most people, I’ve done the dieting thing before," admits Giovanni. "But, when I watched the
      videos about past winners who were the same size as me, I started to see real results from real people who I could
      really talk to. That’s what made me say ‘I am going to do this.’"
    </p>
    <h3>Giovanni’s Accomplishment</h3>
    <p>
      Today, Giovanni is more than 100 pounds lighter,* a proud member of the Isagenix 100-Pound Club and has the energy needed
      to keep up with his grandkids.
    </p>
    <p>
      Aside from losing the weight, he was most excited about being able to sleep lying down. For the last 15 years, he has slept
      in a recliner because of other associated health concerns.
    </p>
    <p>
      "A week and a half after I started the program, I was reading my grandkids a goodnight story," shares Giovanni. "And, I fell
      asleep. I woke up around 7 a.m. the next morning, but it wasn’t until 9 a.m. that I realized I had slept through
      the night."
    </p>
    <h3>Giovanni’s Next Goal</h3>
    <p>
      Now, he’s focused on getting his Isagenix business up and running so he can be financially secure and leave something behind
      for his grandchildren.
    </p>
    <h3>Giovanni’s Tips for Success</h3>
    <ul>
      <li>Follow the program as it was laid out by Isagenix as much as you can.</li>
      <li>Affirm to yourself every day that you are making a lifestyle change for the better.</li>
      <li>Keep yourself connected to local and national Isagenix events.</li>
    </ul>
    <h3>Giovanni’s Favorite Products</h3>
    <ul>
      <li>IsaPro®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>e+™</li>
    </ul>`;
  }

  private getGlenOSuccessStory(): string {
    return `
    <h3>Agricultural Farmer Returns to His Former Elite Athlete Shape</h3>
    <p>
      As a retired elite athlete in the West Australian Football League (WAFL), Glen was rapidly gaining weight from his inability
      to exercise because of physical pain. Shocked by his exhaustion, lack of energy, digestive issues, high blood pressure
      and weight gain, this agriculture farmer was looking for a change.
    </p>
    <p>
      Glen hesitated to try Isagenix, at first thinking it was too expensive, but when it was simplified for him as being just
      $6 a meal, Glen began his transformation.
    </p>
    <h3>His Proud Achievements</h3>
    <p>
      Starting with the 30-Day Starter Pak, Glen released 18 pounds in 30 days and 30 inches overall.* He knew the Cleanse for
      Life® was the key to releasing pounds. After joining the IsaBody Challenge®, he experienced major improvements in
      weight loss, energy and his general well-being, no longer experiencing aches or pains, even gaining the ability to
      exercise again.
    </p>
    <p>
      Not only did Glen drop to 30" from 36" in pant sizes,* but his body shape had also almost returned to that of fifteen years
      ago when he was playing in the WAFL.
    </p>
    <p>
      Soon enough, people were witnessing his results and wanted to know what he was doing.
    </p>
    <h3>Health Leads to Wealth</h3>
    <p>
      Rejuvenated, this 4-Star Golden Circle, 2-Star Crystal Executive agricultural farmer with no university degree or experience
      in network marketing earns approximately $12,000 a month.**
    </p>
    <p>
      Hooked on Isagenix for life, Glen and his wife Karen want to share their love of Isagenix products with as many people as
      they can. What else does Glen plan on accomplishing?
    </p>
    <p>
      Glen shares, "Growing our team, so they are all getting paid."
    </p>
    <h3>Glen's Tips for Success</h3>
    <ul>
      <li><strong>Duplicate.</strong> People are not duplicable, but tools and systems are.</li>
      <li><strong>Keep it simple.</strong> Anyone can do it. We are all on an equal playing field.</li>
      <li><strong>Be patient.</strong> Results vary and come at different speeds. Just stick to the system.</li>
    </ul>
    <h3>Glen's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>FiberSnacks!™</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJenniferAnneSSuccessStory(): string {
    return `<h3>One Woman’s Determination Leads to More Confidence and Control</h3>
    <p>
      Jennifer-Anne was a new mother at 40 years old with her first child and working in the finance industry in Hong Kong. Before
      Isagenix®, she was sleep deprived and stressed from handling a new baby along with her full-time job. She also suffered
      often from colds, didn’t exercise and made poor eating choices.
    </p>
    <p>
      As a result, she gained weight and lost confidence in how she looked.
    </p>
    <p>
      When she first tried Isagenix products, she released 22 pounds* and maintained that weight loss, but then the pounds gradually
      crept back on.
    </p>
    <p>
      "The weight gain was more pronounced when we relocated to Penang as the lifestyle and food there is not conducive to maintaining
      a healthy weight if you aren’t careful," shares Jennifer-Anne.
    </p>
    <h3>A Change of Scenery</h3>
    <p>
      Surrounded in a hot climate by people in bikinis at the pool or beach, Jennifer-Anne felt ashamed that her clothes weren’t
      properly fitting her anymore. She realized that she had to stop "dieting" and commit to the lifestyle change.
    </p>
    <p>
      Jennifer-Anne had halfheartedly joined the IsaBody Challenge® in the past, but never completed. After hearing 2010 IsaBody
      Challenge Grand Prize Winner Holly D. at the March Hong Kong Celebration, she knew the Challenge could be huge for
      her personal health and business growth in Malaysia.
    </p>
    <p>
      After starting with the 9-Day Cleansing and Fat Burning System, she immediately ordered a President’s Pak and has been using
      Isagenix products ever since. For the IsaBody Challenge, she followed two back-to-back 9-Day Systems and lost 16
      pounds as of June 2013 after the end of the first round, losing 24.2 pounds and lowering her body fat to 9 percent
      with a 22.9 percent BMI down from 26.9 percent overall.* Her best milestone was easily completing her first Warrior
      Boot Camp, an extreme boot-camp class, and recovering quickly.
    </p>
    <p>
      "For me, the weight loss and maintaining that weight loss has really impacted my life in terms of confidence, fitness and
      energy levels as well as my overall health," shares Jennifer-Anne. "I also don’t crave unhealthy food anymore and
      eat ‘clean and green’ as much as I can."
    </p>
    <h3>Teaching Internationally</h3>
    <p>
      Now 1-Star Silver Circle, and Manager Jennifer-Anne is a holistic nutritionist, running detox programs in Hong Kong and Malaysia
      using Isagenix systems. She is quickly building her business in Singapore and Penang.
    </p>
    <p>
      With a plan to run more 10-kilometer races and to become stronger, faster and leaner, Jennifer-Anne adds, "I will be teaching
      at more schools and collaborating with more local businesses in Penang, Singapore and Hong Kong to grow my Isagenix
      business and share this amazing company and our superior products with as many people as possible."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Anyone can do it. The products are amazing and to do the business, you just need to put them in your body and then
        tell people about them.</li>
      <li>Don’t give up. There are always people who need these products, and my goal is to share Isagenix with as many people
        as possible, even if they don’t want to be business builders.</li>
    </ul>
    <h3>Jennifer-Anne's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>Cleanse for Life®</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getJoeMSuccessStory(): string {
    return `<h3>Family Man Proves Isagenix is Not a Fad Diet</h3>
    <p>
      Joe had everything going for him: a wonderful wife, two adoring twin girls, and a thriving business. But, at 278 pounds,
      45-year-old Joe was so overwhelmed by his size, which had prevented him from fully enjoying life.
    </p>
    <p>
      “When my wife and I got together, we lived by the motto that we were going to make life happen. That held true for almost
      every aspect of my life except when it came to my health. I had come to the realization that I had simply let life
      happen," shares Joe.
    </p>
    <p>
      His “a-ha" moment came while watching his 47-year-old physically fit wife compete in her first-ever fitness competition
      after using Isagenix®.
    </p>
    <p>
      In that moment, he realized it was time for his own transformation; he knew he could be in the best shape of his life with
      the IsaBody Challenge® and the 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      He was right. By the end of Joe’s IsaBody Challenge journey, he had released 51 pounds, said goodbye to 39 inches overall,
      and added 16 pounds of lean muscle mass.*
    </p>
    <p>
      His incredible transformation also won him a spot in the 2013 Top 6 IsaBody Challenge Celebration judging.
    </p>
    <p>
      But for Joe, this milestone was the first of many more to come. He entered the IsaBody Challenge for a second time with the
      goal of taking his fitness to another level and increasing his lean muscle mass.
    </p>
    <p>
      And, while he doesn’t know what he will do next, he looks forward to using his transformation to inspire others and build
      his Isagenix business with his wife.
    </p>
    <h3>Joe’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>If you are serious about weight loss and adding lean muscle mass you might as well be as efficient as possible. This
        means using all the Isagenix products as they have a synergistic effect.</li>
      <li>Use the Isagenix Brain and Sleep Support system to ensure that you consistently experience quality sleep. Quality
        sleep has a significant impact on everything including focus, cravings, will power, etc.</li>
      <li>Use interval training like CrossFit to burn more calories. Variety is critical to ensure that your body is constantly
        challenged and that you don’t get bored.</li>
      <li>Make sure you broadcast your goals to family, friends and co-workers for accountability.</li>
    </ul>
    <h3>Joe’s Key Products for Feeling More Youthful:</h3>
    <ul>
      <li>French Vanilla IsaLean® Pro with Want More Energy?®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Sleep Support & Renewal™</li>
    </ul>`;
  }

  private getKellyAnnZSuccessStory(): string {
    return `<h3>IsaBody Winner Takes Flight With New Physique Gaining $25,000**</h3>
    <p>
      At 40, Kelly Ann Z. was an avid athlete with two kids under three when her weight hit 185 pounds.
    </p>
    <p>
      While she never considered herself "big," the last time Kelly recalls being a "normal" weight was around seven years old.
    </p>
    <p>
      For the past 25 years, she’s jumped from diet to diet. Her job as a flight attendant made eating a balanced meal difficult.
      Often she found herself eating convenient but unhealthy meals in between flights. As a result, Kelly Ann became more
      and more lethargic.
    </p>
    <p>
      "I wanted to recapture who I used to be and the energy I used to have," shares the Toronto resident.
    </p>
    <p>
      Introduced to Isagenix® by her friend, Tina G., Kelly Ann was excited about the products and the convenience, which made
      them seem ideal for her on-the-go lifestyle.
    </p>
    <p>
      But, before committing to her first 30-Day Cleansing and Fat Burning System, she wanted to better understand the science
      behind the products, so she did a little research before ordering the Pacesetter Pak.
    </p>
    <p>
      "Like any new user, I was still a bit skeptical," shares Kelly Ann. "But, I would know within 30 days if this system was
      right for me."
    </p>
    <p>
      Only this time, she decided to take a different approach to her weight-loss journey. She chose to focus on the nutrition
      and forgo the gym for her first 30 days.
    </p>
    <p>
      "I lost more than 20 pounds* by doing that," laughs Kelly Ann. "I was so excited, I did it again!"
    </p>
    <p>
      By her third 30-Day System, Kelly Ann had so much energy she had to go to the gym. That’s also when she decided to join the
      IsaBody Challenge® and completed two back-to-back Challenges.
    </p>
    <p>
      Thanks to her relentless commitment, this now toned athlete went from a size 16/18 to a size two,* a size she never thought
      was possible.
    </p>
    <p>
      "I am no longer hiding, adds this 2013 IsaBody Challenge Grand Prize Winner. "Thanks to Isagenix, I am living out loud!"
    </p>
    <p>
      Sporting a sleek new physique, Kelly Ann started sharing her success with those around her, which in turn, has helped ignite
      her Isagenix business.
    </p>
    <p>
      Not only has this Challenge winner transformed her health, but she’s now transforming her wealth and will enjoy a paid IsaBody
      Challenge® Transformation Cruise.
    </p>
    <p>
      In addition to the cash and prizes received from her IsaBody Challenge Kelly Ann has earned an extra $1,000** a month since
      May 2012. Sharing her experiences and her Challenge story has kick-started her Isagenix business and significantly
      added to her residual income.
    </p>
    <p>
      "This business is not your typical 9-to-5 job where you’re not supported by the people around you," shares Kelly Ann. "With
      Isagenix everyone is rooting for your success. You’re supported by your teammates, the people above you and the Corporate
      Executive Leaders."
    </p>
    <p>
      To keep momentum, Kelly Ann keeps what Isagenix Millionaire, 18-Star Platinum and 6-Star Crystal Executive Jimmy S. front
      of mind, which is "never give up."
    </p>
    <p>
      "That advice, plus the results from my Challenge and the many tools available to me, keep me moving forward," shares Kelly
      Ann. "My goal is to join the ranks of Isagenix Millionaire, 13-Star Platinum and 10-Crystal Executive Lynn H.; Isagenix
      Millionaire, 8-Star Platinum and 11-Star Crystal Executive Lisa D.; and Isagenix Millionaire, 14-Star Platinum and
      12-Star Crystal Executive Susan S. They’re incredible women, incredible mentors and incredible business builders,"
      she says.
    </p>
    <h3>Kelly Ann’s Tips for Success</h3>
    <ul>
      <li>Follow the system. If you’re struggling, reach out to your support team for tips to stay on track. Don’t ever give
        up.</li>
      <li>Know your "why" and focus on all you’ll be gaining.</li>
      <li>Focus on nutrition! It’s 80 percent of the battle. Let Isagenix do the work it was created to do.
        <li>Be prepared! Always have an Isagenix snack on hand.</li>
    </ul>
    <h3>Kelly Ann’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Natural Chocolate IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getMikeTSuccessStory(): string {
    return `<h3>How Isagenix Helped This Utah Man Become Half His Size</h3>
    <p>
      Mike never thought the day would come when the fitness pros at the local gym would pat him on the back and thank him for
      being an inspiration.
    </p>
    <p>
      "When I first started working out I could barely walk from my car to the gym without getting winded," shares Mike, now
      a proud member of the 200-Pound Club. "I weighed 505 pounds and was facing serious health problems."
    </p>
    <p>
      But, thanks to the persistence of a friend, Mike attended an Isagenix® Launch Party and was immediately hooked on the nutritional
      benefits of the products and the like-minded people who attended.
    </p>
    <p>
      In fact, Mike met the one man who would help transform his life: Gary.
    </p>
    <p>
      After befriending Gary, a soon-to-be-certified fitness trainer, the two agreed to work together to help Mike achieve his
      320-pound weight-loss goal.
    </p>
    <p>
      While his target weight of 195 pounds may have seemed a bit far fetched at the time, this 6’1 former Biggest Loser reject
      has since dropped more than 200 pounds* and 20 pant sizes* using the 30-Day Cleansing and Fat Burning System.
    </p>
    <h3>A Walk to Remember</h3>
    <p>
      "Today, I walk on the treadmill at a level 15 incline for 45 minutes," shares the 2013 IsaBody Challenge Celebration Weight-Loss
      Solution Category Winner.
    </p>
    <p>
      With less than 100 pounds to go until he achieves his ultimate weight-loss goal of 195 pounds, Mike is also one step closer
      to achieving a prestigious Isagenix goal: becoming a newly inducted 300-Pound Club member.
    </p>
    <p>
      A youth counselor by trade, Mike is fortunate enough to have a career that allows him to work out four to six days a week
      for three to five hours at a time.
    </p>
    <p>
      "I have a new life," says Mike. "I wear a size 46 waist*…the last time I had a 46-inch waist was in high school!"
    </p>
    <h3>The Start of a New Chapter</h3>
    <p>
      So, what’s next?
    </p>
    <p>
      Aside from unveiling his even thinner physique at 2014 "Together We Will" New Year Kick Off, Mike wants to get his Isagenix
      business going, achieve financial freedom and retire within the next few years.
    </p>
    <p>
      Since starting his business in July 2012, Mike has actively shared Isagenix with others who also want to lose weight while
      still working full time.
    </p>
    <p>
      He understands that with patience, persistence and time, his business will eventually take off. For now, he plans to lead
      by example and continue to plant seeds in the minds of those he meets.
    </p>
    <p>
      In the interim, Mike is educating himself on the new tools Isagenix develops and knows the company is there to help him achieve
      all of his goals.
    </p>
    <h3>Mike’s Tips for Success</h3>
    <ul>
      <li>Love people.</li>
      <li>Trust and believe in yourself.</li>
      <li>Be patient.</li>
      <li>Be persistent.</li>
    </ul>
    <h3>Mike’s Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getNilsMSuccessStory(): string {
    return `<h3>A Story of Hope: Father Overcomes Tragedy and Regains Health</h3>
    <p>
      When Nils M. and his wife, Elizabeth, lost their six-year-old daughter to cancer, they were broken. They both put their own
      health aside to make their daughter a top priority.
    </p>
    <p>
      "My body was out of shape, my mind was numb," says Nils. "I had no desire to pursue any fitness or exercise program which
      years before had always been at the center of my life."
    </p>
    <h3>The First Steps to Redemption</h3>
    <p>
      Nils’ first steps to success were through his wife, Elizabeth, who was competing in the IsaBody Challenge® in 2012. Nils
      was so inspired by his wife’s total mind and body transformation, he decided to join her for her workouts. The first
      steps were not easy, but Nils was determined to see his own commitment through.
    </p>
    <p>
      "When my wife invited me to join her to work out with her CrossFit coach during her IsaBody Challenge, I had not set foot
      inside a gym since 2006," says Nils. "During our first session, I literally did one box jump and two burpees. And
      that was more than plenty."
    </p>
    <p>
      Slowly, Nils chipped away at each day to bring both his mindset and his body to the next level. Like Elizabeth, Nils used
      a variety of Isagenix products to kick-start his new health and he couldn’t believe the difference in energy and
      focus both during workouts and throughout the day. Eventually, Nils decided to follow in his wife’s footsteps by
      registering for the 2013 IsaBody Challenge.
    </p>
    <h3>A Challenge Within a Challenge</h3>
    <p>
      When Nils started his IsaBody Challenge, he became sick in his first month. "It was one of those moments I knew that even
      with very limited time, Isagenix still gave me the products to be what I wanted to be if I was willing to put in
      the time and effort," shares Nils. Since his job requires him to travel, fitting in a good workout was sometimes
      difficult, but Nils always managed to make it work, even on days where most of his time was spent on an airplane.
      Nils says, "The difference between being average and excelling and exceeding, is that you must be willing to put
      in the effort."
    </p>
    <p>
      For Nils it was never a matter of completing the challenge, it was a matter of exceeding the base of doing average. "Quitting
      after a 15-hour day or finding an excuse to say I’m too tired was not an option," he says. The Challenge was done
      in only 90 days. "Part of what I wanted my Isagenix story to be was a story of hope. I wanted to be transparent enough
      for people to realize even in the middle of adversity there still is hope, a goal and a finish line."
    </p>
    <h3>Nils’ Tips for Success</h3>
    <ul>
      <li>Find a reason, a purpose to start.</li>
      <li>Commit to your goal completely; no excuses.</li>
      <li>Quitting is not an option. Doing does what wishing won’t!</li>
    </ul>
    <h3>Nils’ Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro (Chocolate) with IsaFruits® and Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
      <li>Chocolate Peanut Crunch IsaLean Bar</li>
    </ul>`;
  }

  private getDrPaulBSuccessStory(): string {
    return `<h3>One Man’s Mission to Get Six-Pack Abs Without the Cardio</h3>
    <p>
      Dr. Paul is the father of three young children and the owner of two chiropractic offices. Before trying Isagenix, he appeared
      to be in good shape on the outside, but secretly, he was struggling with low energy and sleepless nights.
    </p>
    <p>
      As a result, life’s everyday stresses began mounting and Dr. Paul found himself looking for comfort in all the wrong places.
    </p>
    <p>
      "I was eating at fast food restaurants a lot," shares Dr. Paul. "Prior to having kids, I was in great shape, but between
      work and life I was starting to pack on a few pounds."
    </p>
    <p>
      That’s when Dr. Paul decided he was ready for a change and discovered Isagenix®.
    </p>
    <h3>Food for Thought</h3>
    <p>
      Interestingly enough, Dr. Paul also creates high-performance, nutritional meal plans for elite athletes. As he began reading
      the labels of the 30-Day Cleansing and Fat Burning System, he became increasingly impressed by its ingredients. More
      importantly, he was blown away when he realized the nutrients were complete enough to help him achieve six-pack abs
      if he simply weight trained and fueled his body with the system.
    </p>
    <p>
      Putting his idea into motion, he added an extra level of accountability by sharing his lofty goal with everyone he knew.
      He would focus on weights and skip the cardio. Now, he just had to prove it.
    </p>
    <p>
      So, he created a schedule that allowed him to go to the gym a minimum of three times a week while leaving ample time for
      his kids.
    </p>
    <p>
      At the end of Dr. Paul’s 16-week Challenge, he had lost 32 pounds,* went from 24 percent body fat to nine percent* and put
      on 15 percent lean muscle mass.* He also unveiled his newly chiseled washboard abs.
    </p>
    <p>
      "It’s all in the nutrients," adds the 41-year-old father. "You need world-class nutrition to get world-class results."
    </p>
    <h3>Best of Both Worlds</h3>
    <p>
      In addition to being in the best shape of his life, Dr. Paul’s transformation helped to launch his Isagenix business, which
      he is pursuing with his wife Dr. Renata.
    </p>
    <p>
      "When people see a change in you, they automatically want to do it," shares Dr. Paul.
    </p>
    <p>
      The key, he said, was belief in the products.
    </p>
    <p>
      Since January 2013, this 1-Star Golden Circle couple has focused on transforming as many lives as possible by sharing Isagenix
      and its products.
    </p>
    <p>
      "Thanks to Isagenix®, our income potential is limitless," adds Dr. Paul. "Isagenix is my future. My goal now is to expand
      the nutritional benefits to pro athletes everywhere!"
    </p>
    <h3>Dr. Paul’s Tips for Success</h3>
    <ul>
      <li>
        <strong>Plug In.</strong> It’s simple, just plug yourself in to all the support Isagenix has to offers from seminars, to
        events, to live weekly calls, and the vast amount of information that is found throughout the Isagenix websites.
        It’s all there for you to become extremely successful, just plug yourself in!</li>
      <li>
        <strong>Speak from Experience.</strong> There is nothing more powerful than speaking from personal experience. Once Isagenix
        has changed your life in a positive way, people will want to follow you.</li>
      <li>
        <strong>Partner Up!</strong> Although many people have built extremely successful Isagenix businesses on their own, it’s
        amazing to have your significant other involved. "I’m very fortunate to be working with my wife," says Dr. Paul.</li>
    </ul>
    <h3>Dr. Paul’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaPro®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getRichardBSuccessStory(): string {
    return `<h3>Retired CEO Finds Strength in Isagenix</h3>
    <p>
      Retirement had been good to Richard. Not only did he buy a farm on the outskirts of Toronto Ontario, but he had finally been
      able to focus on his health.
    </p>
    <p>
      Prior to having time freedom, Richard was the president of a subsidiary for an international steel company with a nonstop
      schedule. The result? His health concerns were always pushed to the side.
    </p>
    <p>
      It wasn’t until a good friend told Richard about Isagenix® in 2006 that he even considered his health or eating right.
    </p>
    <p>
      "She looked fabulous," shares Richard. "And, she was a very credible gal."
    </p>
    <p>
      He admits he was a bit skeptical in the beginning, but opted to order the 9-Day Deep Cleansing and Fat Burning System anyway.
      He rationalized his decision by telling himself that if the system didn’t work, he only committed to nine days.
    </p>
    <p>
      "Within weeks I had lost 31 pounds,"* shares Richard incredulously. "I couldn’t believe it."
    </p>
    <p>
      After maintaining his weight loss for six years, Richard decided to join the 2013 IsaBody Challenge® and be a role model
      for Baby Boomers, proving you can change the direction of your health if you choose to.
    </p>
    <p>
      By the time Richard submitted his final stats for the Challenge, he was a fit 181.5 pounds* and in the best shape of his
      life. He even returned to martial arts after a long hiatus and now has the opportunity to travel the world participating
      in international martial arts events.
    </p>
    <p>
      "The Isagenix products continue to amaze me,” says Richard.
    </p>
    <h3>Richard’s Tips for Success</h3>
    <ul>
      <li>Drink half your body weight in ounces of water per day.</li>
      <li>Start off working out slowly, especially if you haven’t worked out in days, months or even years.</li>
      <li>Coordinate your Isagenix products so they align with your workouts.</li>
      <li>Have a progressive goal. Do what you can each day and the next day do a little more.</li>
    </ul>
    <h3>Richard’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Cleanse for Life®</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
    </ul>`;
  }

  private getRichardRSuccessStory(): string {
    return `<h3>Physical Therapist Finally Fits Into His Life</h3>
    <p>
      Before May 2012, Richard had no idea what it felt like to "be in shape." He had been overweight his whole life.
    </p>
    <p>
      "I reached 200 pounds by the time I was 12 years old; 250 pounds by my sophomore year in high school, and 300 pounds by graduation,"
      shares the first-ever IsaBody Challenge® Weight-Loss Solution Winner and newly crowned 100-Pound Club member. "I’ve
      stayed above 300 pounds ever since."
    </p>
    <p>
      That was until last summer when he stepped on the scale and weighed a staggering 410 pounds for the first time in his life.
    </p>
    <p>
      "Words cannot describe the feeling that came over me when I saw a ‘four’ in front of my weight," says Richard, who is also
      a physical therapist. "It was an eye opener."
    </p>
    <p>
      Intent on losing weight, Richard ordered the 30-Day Cleansing and Fat Burning System and agreed to follow the same formula
      for success his fitness-competitor wife uses to stay in peak performance.
    </p>
    <p>
      When the package arrived, he found himself reading more about the Challenge and relating to the stories of former Challenge
      winners Jill B. and Craig C. Their success gave Richard the push he needed to sign up.
    </p>
    <p>
      Fueled by inspiration, Richard lost 21 pounds,* then he was down 39 pounds;* then more than 100 pounds* overall.
    </p>
    <p>
      His inspirational transformation earned him $1,000 cash and the chance for he and his wife to join the Top 3 New Year Kick
      Off Challenge Finalists on a tropical cruise, plus it also encouraged many of his friends to take control of their
      health, too.
    </p>
    <p>
      As an added bonus since completing the Challenge, Richard has jump-started his Isagenix business and is excited to create
      an extra stream of income.
    </p>
    <p>
      Now, aside from growing his business, Richard plans on fulfilling his life-long dream of becoming a bodybuilder.
    </p>
    <h3>Richard’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Don’t just do cardio to burn calories, add resistance training to your workouts—you will lose weight faster and have
        an easier time keeping it off. Remember increased muscle mass = increased metabolic rate. Females often worry about
        getting too "bulky,” that’s not going to happen!</li>
      <li>Set small, attainable goals. It’s good to have a long-term goal, but remember body composition is going to change,
        so is the ideal weight that you have in mind.</li>
      <li>Find someone to do the program with and join the IsaBody Challenge. Anything to hold you accountable.</li>
      <li>Get a scale to weigh your foods. It’s a great way to make sure you are not eating too much and ensure you are not
        depriving yourself of important calories—some foods are very deceiving!</li>
    </ul>
    <h3>Richard’s Can Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Natural Accelerator™</li>
      <li>Chocolate Decadence IsaLean® Bar</li>
    </ul>`;
  }

  private getShannonKSuccessStory(): string {
    return `<h3>Single Mom Goes From Overweight to Athlete</h3>
    <p>
      Five years ago, when Shannon was six months pregnant with her youngest child, and her oldest was only 18 months old, Shannon’s
      husband suddenly left their marriage. As a new single parent, Shannon struggled to find the balance between being
      a great parent, and looking after her own health. Embarrassed, Shannon let the weight pile on.
    </p>
    <p>
      At 286 pounds, Shannon was no longer able to keep up with her two kids. This brave single mother of two realized her daughters
      needed a mother who was healthy in both mind and body. With Isagenix and the IsaBody Challenge®, Shannon started
      her journey to become just that.
    </p>
    <p>
      "I never thought I would be called an athlete," said the mother of two. Now, Shannon is a member of the Isagenix 100-Pound
      Club, an active runner and swimmer. But more than anything else, Shannon is an excellent role model for her two daughters,
      and an inspiration to single mothers everywhere.
    </p>
    <h3>Shannon’s Motivation</h3>
    <p>
      A friend of Shannon’s introduced her to Isagenix, but it wasn’t until she met the 2012 IsaBody Champion, Craig C., that Shannon
      started her Isagenix journey. Craig became Shannon’s accountability partner and source of fitness motivation. Craig,
      and his sponsors, inspired her throughout her journey. However the reason Shannon truly decided to make a major lifestyle
      change was for her kids. Shannon’s children, her ‘why’, are what ignited her weight-loss journey.
    </p>
    <p>
      "One of my favorite parts is helping others find their ‘why’ and guiding them through their own successful journey," shares
      Shannon. "It is my true passion, as I believe that anyone can do it!"
    </p>
    <h3>What’s Next?</h3>
    <p>
      Now, Shannon is more present for her children and family than ever. After realizing that she deserved to be healthy and that
      loving herself was the best gift she could give her children, her family is now built around the core value that
      healthy is a lifestyle. Shannon, who originally started out as a product user, says, "I can’t help but move forward
      with the business aspect of Isagenix. I want to share the products and my story with the world. I believe that Isagenix
      has the answer to whatever your goal is. Isagenix changed my life, and my family’s, forever."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Start out slowly and ease into it. Don’t try to do everything at once right off the bat. Focus on what you have done
        and can do, rather than on what you still can’t do.</li>
      <li>Plan your meals and exercise schedule for the week in advance. "Fail to plan….Plan to fail."</li>
      <li>Get connected. Surround yourself with as many accountability/ support partners as you can. Get connected with others
        on the same journey!</li>
    </ul>
    <h3>Shannon's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro Vanilla Shake</li>
      <li>IsaFruits® and Isagenix Greens!™</li>
    </ul>`;
  }

  private getAngelaRSuccessStory(): string {
    return `<h3>Housewife Turns Entrepreneur and Helps Save Family Home</h3>
    <p>
      As a child, Angela was forced to grow up way before her time.
    </p>
    <p>
      At 10, she witnessed her sister die after being struck by a speeding motorcyclist while walking home one afternoon. The event,
      so horrific, would change her life and leave her suffering from survivor’s guilt for many years to come.
    </p>
    <p>
      By 16, she was on her own wondering "what now"?
    </p>
    <p>
      "I became a dieting guru trying everything to lose weight and feel more alive," says Angela of Washington.
    </p>
    <p>
      But, in 1988 everything changed for Angela when the love of her life asked for her hand in marriage. Sharing two beautiful
      children, Angela and her husband eventually faced a few tough challenges as a family: their 11-year-old son was diagnosed
      with a devastating medical condition and then her husband suffered a tragic, life-changing accident within months
      of each other.
    </p>
    <p>
      "My life’s focus became fighting for them with every fiber of my being," says the mom of two. "I very quickly lost myself.
      I was overcome with guilt for being relatively healthy, and guilty for being too distracted by tragedy to be there
      fully for my beautiful daughter."
    </p>
    <p>
      It was also the same time Angela’s weight started to spiral out of control.
    </p>
    <p>
      After spending close to eight years researching a vast array of medical conditions associated with her son’s condition, Angela
      became a nutritional guru and stumbled upon Isagenix.
    </p>
    <p>
      She also started to see success on the scale after using the products. That’s when she decided to join the IsaBody Challenge.
    </p>
    <p>
      With mounting medical bills and the family home nearing foreclosure, Angela knew she had to act quickly to start generating
      new income for the family.
    </p>
    <p>
      "I remember asking myself over and over how I was going to pay for these life-saving products and the answer was simple,"
      admits the Challenge finalist. "I would do whatever it took."
    </p>
    <p>
      Inspired by the successful women within Isagenix, Angela took a leap of faith and started her own business.
    </p>
    <p>
      Her life now includes, living authentically, cultivating deep friendships, and, thanks to Isagenix Co-Founders Jim and Kathy
      Coover’s incredible compensation plan, a home safe from foreclosure.
    </p>
    <p>
      "I feel like I am able to dream for the first time," she says. "I’ve finally found something I am truly passionate about."
    </p>
    <p>
      In addition, Angela’s daughter has decided to follow in her mother’s footsteps and has started sharing the Isagenix message.
    </p>
    <p>
      "Helping others to achieve physical health and financial freedom is such a beautiful thing," shares the 1-Star Golden Circle
      and Crystal Executive. "It is like looking through the eyes of a child and seeing the excitement of discovery for
      the first time."
    </p>
    <p>
      Entering her second Challenge just a few weeks ago, Angela is hoping to win this upcoming Challenge and continue on to become
      the next Isagenix Millionaire.
    </p>
    <p>
      "My dreams are big," she says. "My ‘why’ is even bigger!"
    </p>
    <h3>Angela’s Tips for Success</h3>
    <ul>
      <li>Stay the course. If it worked for me, it will work for you. You have to set your mind to it and keep going. Success
        doesn’t mean being perfect…it means that I have decided to look beyond the imperfections!</li>
      <li>Dream big! It might feel uncomfortable at first and you may feel undeserving of such big dreams, but each and every
        one of us deserves to live in a body of optimal health! Focus on what you want. What you think about you bring
        about.</li>
      <li>Remember, there is no limit to what you can achieve. A lot of times our limitations come from within. Be willing
        to grow through this journey and reach outside of your comfort zone; that is when great things happen!</li>
      <li>Listen to your body. Put foods in it that make you feel good. For me, that’s avoiding sugar and white flour. Nothing
        processed. There are a lot of great options out there for gluten-free foods. I have found that by tweaking my favorite
        recipes and using healthier alternatives I am doing right by my body and don’t feel deprived.</li>
    </ul>
    <h3>Angela’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>IsaDelight Plus™</li>
      <li>Cleanse for Life®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getCraigCSuccessStory(): string {
    return `<h3>British Columbia Man Goes From ‘I Can't’ to ‘I Can’</h3>
    <p>
      For years, Craig lived in a limit-filled world and was often told "he can’t" do things because of his size. He was a chubby
      child who was teased mercilessly, and the weight only piled on as he approached adulthood.
    </p>
    <p>
      At 13, he was a whopping 185 pounds; by 17 he was 225 pounds. By his early 20s, Craig was tipping the scales at 330 pounds.
    </p>
    <p>
      From a young age, he began using humor as a way to deflect his embarrassment and protect himself against the abrasive taunts
      and constant name calling.
    </p>
    <p>
      "I remember falling through a chair in public one time because of my weight and having to poke fun at myself to cover up
      the pain and humiliation," admits Craig.
    </p>
    <p>
      He had tried numerous weight-loss programs, but to no avail.
    </p>
    <p>
      Overwhelmed by rejection and uneasy about his size, he began to believe he couldn’t do many things. He had given up on his
      dream of one day owning an athletic build, that would let him have the freedom to participate in any sport or adventure
      that presented itself.
    </p>
    <p>
      Then, Craig discovered Isagenix®.
    </p>
    <p>
      When Craig first heard about Isagenix, he was actively trying to lose weight, but not having any luck. After learning about
      Isagenix, he was motivated to make a permanent change and eager to purchase his first 30-Day Cleansing and Fat Burning
      System. He also entered the 2009 IsaBody Challenge®. The combination helped Craig lose 60 pounds* in his first three
      months with Isagenix.
    </p>
    <p>
      Still, the phrase "I can’t" echoed in his head and threatened to sideline his newfound healthy lifestyle as he began turning
      back to his old habits.
    </p>
    <p>
      Thankfully, his friends recognized the change and insisted he attend an upcoming Isagenix event. There he heard a quote that
      would change his outlook on life for good: "You can have anything you want, as soon as you give up the belief that
      you can’t have it."
    </p>
    <p>
      "Right then, I gave up the belief I couldn’t be happy and started taking my health to the next level," shares Craig. "I stopped
      chasing who I thought I was and started living as the real me."
    </p>
    <p>
      Embracing his true identity meant finishing what he had started. Craig was adamant about completing the 2012 Challenge since
      he hadn’t completed his first one back in 2009.
    </p>
    <p>
      "This time I gave it everything I had," says Craig. "Joining the Challenge was a way to hold myself accountable, set a goal,
      and stick with it."
    </p>
    <p>
      Finishing a month and a half early to make the IsaBody Challenge Celebration judging period, Craig lost 37 pounds.* Collectively,
      he has released 126 pounds* and more than 200 inches* with Isagenix. His whole-body transformation coupled with his
      impressive essay "wowed” the judges and won him the 2012 IsaBody Challenge Grand Prize title plus $25,000 in cash
      and prizes. "My sights are now set on becoming an IsaAthlete by competing in my first-ever bodybuilding competition
      this November, and enjoying a life filled with inspiring others to help find their ‘I Can,’" shares the 2012 IsaBody
      Challenge Grand Prize winner.
    </p>
    <p>
      Craig also plans to start his own business and aspires to achieve the prestigious 3 Star Golden Circle recognition by 2013
      "Focus On Your Future" New Year Kick Off.
    </p>
    <h3>Craig’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Believe in the products. Once you open up your mind and allow the system to work, it does.</li>
      <li>Drink lots of high-quality water. I know people always say to drink a lot of water, but there is something to be
        said for drinking good quality water.</li>
      <li>Get a good night’s rest. By sleeping a solid eight hours, you’re allowing your body to recharge and prepare for the
        next day.</li>
      <li>Doing any kind of exercise that’ll help keep you motivated. Find a dynamic workout that relates to something you
        love and stick to it.</li>
    </ul>
    <h3>Craig’s Can-Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro Shake</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Brain and Sleep Support System</li>
    </ul>`;
  }

  private getDrVictoriaTSuccessStory(): string {
    return `<h3>One Woman’s Decision to Save Her Family</h3>
    <p>
      As a clinical psychologist, Dr. Victoria spends her days helping patients improve their quality of life; as a wife and mother,
      her oversized frame was holding her back from doing what she loved most.
    </p>
    <p>
      But, life wasn’t always this way for the former competitive athlete.
    </p>
    <p>
      In 1998, Dr. Victoria was involved in a car accident that left her barely able to walk. As time progressed and she regained
      her footing, she still found it impossible to exercise. After 14 years dealing with severe back pain, loss of sensation
      in her feet and lack of balance, her weight reached an overwhelming 210 pounds.*
    </p>
    <p>
      To add insult to injury, the excruciating pain made it hard to stand, let alone cook, which resulted in poor dinner choices
      for her family. Her actions finally hit home when she saw her youngest daughter’s weight reach 217 pounds.*
    </p>
    <p>
      "When you fail yourself you have no one else to blame but yourself; when you fail your children the feeling is awful," shares
      the mother of six. "Something had to be done for her."
    </p>
    <p>
      After talking with her daughter, Dr. Victoria encouraged her to join a gym and work out with a trainer.
    </p>
    <p>
      "That’s how I met Russell," says the Los Angeles native. "He is our trainer; he helped me conquer my fear of hurting my back,
      taught me how to listen to my body and work out safely, and introduced me to Isagenix®."
    </p>
    <p>
      Russell was also the one who ignited Dr. Victoria’s old competitive spark and encouraged her to join the IsaBody Challenge®.
    </p>
    <p>
      "I was amazed at how well my body responded to the Isagenix products," says Dr. Victoria excitedly.
    </p>
    <p>
      With Russell’s help, Dr. Victoria released 71 pounds*, 81 inches and was named a 2012 IsaBody Challenge finalist. Her husband
      and her daughter, who also worked out with them, collectively lost 83 pounds.*
    </p>
    <p>
      "My goal was to reduce my pain level, and it has been completely eliminated," says this 2012 IsaBody Challenge finalist.
      "I feel so much better and have even improved my balance."
    </p>
    <p>
      Her success has also overflowed into her practice.
    </p>
    <p>
      Dr. Victoria now keeps an IsaBlender® in her office and because of that her patients are enjoying the benefits of drinking
      IsaLean® Shakes.
    </p>
    <p>
      "As I get healthier, they too are focusing on their own health concerns," she says.
    </p>
    <p>
      She also discovered she can make money with Isagenix.
    </p>
    <p>
      "I received my Isagenix credit card and promptly shredded it, not realizing that I had earned money," laughs Dr. Victoria.
      "When I talk to people about the financial opportunities with Isagenix, I refer to it as my ‘accidental earning plan.’"
    </p>
    <p>
      Now, Dr. Victoria takes every opportunity to share her story. She also works out at the gym five days a week and is back
      to her athletic ways, all while maintaining a busy practice and enjoying her family.
    </p>
    <h3>Dr. Victoria’s Tips for Success</h3>
    <ul>
      <li>Get involved. Whether you take part in the Facebook forums or listen to an IsaBody Challenge Coaching call, it is
        really helpful to connect with others who are engaging in the Challenge.</li>
      <li>Write down your goals and broadcast it! I did this every month and still have them in an envelope.</li>
      <li>Clean out your kitchen cabinets and get rid of any processed foods. I donated nine leaf-size black bags of food and
        14 cases of soda to my local food bank.</li>
      <li>Keep track of your progress. We all hit plateaus; seeing the results is the most amazing feeling and gives you momentum
        to move forward!</li>
    </ul>
    <h3>Dr. Victoria’s Favorite Products</h3>
    <ul>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ageless Renewal Serum</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getElizabethMSuccessStory(): string {
    return `<h3>One Mother’s Struggle From Tragedy to Triumph</h3>
    <p>
      In 2000 Elizabeth was ready to take on her next life goal, after nine years of marriage she was ready to start a family.
    </p>
    <p>
      In May 2001, that dream came true for Elizabeth and her husband, Nils, who welcomed their first child, Alexander. The next
      year, Elizabeth and Nils would welcome a daughter, Victoria.
    </p>
    <p>
      Much to their surprise Elizabeth became pregnant with her third child in 2005, gained 10 pounds, but suffered a miscarriage.
      Just seven short months later, she discovered she was pregnant again only this time, she found herself sick and unable
      to play with her kids most of the time. Soon after giving birth to her fourth child, her daughter Victoria became
      ill. Multiple doctor visits would uncover Elizabeth’s then four-year-old little girl had a rare cancer. Shocked and
      scared, Elizabeth and her husband put their needs aside and redirected 100 percent of their efforts and resources
      into helping Victoria get better.
    </p>
    <p>
      But, after a three-year battle that included multiple hospital stays and eating whatever was convenient, Elizabeth lost her
      little girl to cancer.
    </p>
    <p>
      "When you lose a child you don’t know how to take the next step" shares Elizabeth. "Our two other children spent the last
      three years being cared for by friends and neighbors while we were at the hospital. We had to relearn how to be a
      family."
    </p>
    <p>
      It wasn’t until the realization that a new decade was approaching that Elizabeth was ready to make a change. Her best friend
      had been taking Isagenix® and she saw firsthand the effectiveness of the products.
    </p>
    <p>
      "I was turning 40 and didn’t want to be 140 pounds," says the North Carolina native. "I needed a lot of nutritional support,
      and I needed something to help me get stronger, feel better, lose weight and increase my energy."
    </p>
    <p>
      Excited for a new, life-changing journey, Elizabeth ordered a 9-Day Deep Cleansing and Fat Burning System to jump-start her
      success. Half-way through the week she was so ecstatic about her results and how she was feeling, she ordered a 30-Day
      Cleansing and Fat Burning System.
    </p>
    <p>
      She later decided to attend 2012 New Year Kick Off to learn more about the company. That’s when she heard about the IsaBody
      Challenge®.
    </p>
    <p>
      "At first, I didn’t think it was for me because I didn’t have 130 pounds* to lose like Jill Birth," shares the 2012 IsaBody
      Challenge finalist. "But, then I saw Lisa W.’s picture and I could relate to her…the mom body."
    </p>
    <p>
      Excited, Elizabeth filled her pantry with all things Isagenix and committed to using the products wholeheartedly and making
      better food choices.
    </p>
    <p>
      "I told my kids my goal was to make the finals and if I did, we were all going to Phoenix," laughs Elizabeth.
    </p>
    <p>
      And to Phoenix they all went after Elizabeth was named a 2012 Challenge finalist, losing 20 pounds* and trimming down her
      physique. She’s proud of her transformation and even accomplished her ultimate goal: 40 and fabulous. Significantly
      slimmer, happier and more energized, Elizabeth’s infectious new attitude even inspired her close friends and neighbors
      to try Isagenix.
    </p>
    <p>
      Now I’m doing the business, introducing Isagenix to people daily and loving life!"
    </p>
    <h3>Elizabeth’s Tips for Success</h3>
    <ul>
      <li>Make a commitment to yourself and follow through. Find an accountability partner to help you stay on track.</li>
      <li>Be consistent. When I started, all I could do was 10 girly pushups and 20 sit ups, which I struggled with, while
        waiting on the laundry. I also kept a journal so I could look back, track my habits and see how far I had come
        for inspiration. Now I can do 50 push ups, 50 pull ups and 100 bicycle-style crunches before I go to bed.</li>
      <li>Get to know all of the products that Isagenix has to offer and use them.</li>
      <li>Don’t lose sight of your goals: see it through to the end.</li>
    </ul>
    <h3>Elizabeth’s Favorite Products</h3>
    <ul>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>IsaLean® Bars</li>
    </ul>`;
  }

  private getFrankPSuccessStory(): string {
    return `<h3>Island Native Reclaims His Paradise Lifestyle</h3>
    <p>
      Growing up in Hawaii was no paradise for Frank. Out of work and 150 pounds overweight, Frank was completely content spending
      his days sitting on the couch playing video games waiting for the right job to come along.
    </p>
    <p>
      After two years, no job and a max weight of 367 pounds, Frank’s Aunt Val offered him a plane ticket to New Jersey and the
      promise of helping him transform his life—both physically and financially. Frank couldn’t resist the offer or his
      family’s willingness to help.
    </p>
    <p>
      "On the plane ride over it was a struggle for me to fit into the seat," admits Franks. "I remember telling myself that this
      would be the last time I would ever have that difficulty." After landing in New Jersey, his aunt stayed true to her
      word and took Frank to her gym the very next day. She also introduced him to Isagenix®, got him started on his first
      30-Day Cleansing and Fat Burning System and signed him up for the IsaBody Challenge®.
    </p>
    <p>
      Frank admits the first few days were hard, but soon it was easy to pass up his routine lunch of rice and macaroni for a shake.
    </p>
    <p>
      "I didn’t want to be big anymore," shares Frank. "I didn’t want to struggle with something as simple as getting out of bed
      anymore."
    </p>
    <p>
      Two weeks in, Frank had more energy and was blasting through his workouts. Franks success set in when he stepped on the scale
      and he was 67 pounds lighter.* But, he didn’t stop there. Frank’s aunt entered him into his first-ever local race.
      Running was new to Frank, but due to his weight-loss success and daily workouts, he was able to place third in his
      age group—a huge accomplishment for Frank.
    </p>
    <p>
      "The support I receive from my family, my Isagenix team, and my fellow gym members is overwhelming," says the 2012 IsaBody
      Challenge finalist. Because of their unwavering commitment, Frank lost an amazing 122 pounds (207 pounds total) and
      103.75 inches.* "I want my journey to help motivate others," excites Frank. "I want everyone to know that if they
      want something bad enough, they can go after it and get it."
    </p>
    <p>
      Frank credits Isagenix for changing his life.
    </p>
    <p>
      "These past few months I’ve gained one of the greatest experiences of my life," says Frank. He’s even discovered a passion
      for running and registered for the Honolulu marathon in December 2012. Heading home to Hawaii will be surreal for
      Frank. Not only will he experience more wiggle room in his plane seat, but he will also get to see the stunned reactions
      of his family and friends when they see him for the first time 200 pounds lighter.
    </p>
    <p>
      "My friends still don’t believe the pictures on Facebook are me," laughs Frank. But, for Frank the biggest moment will be
      when he hugs his mom, who hasn’t seen his transformation or been able to wrap her arms around him in years.
    </p>
    <h3>Frank’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Follow the 30-Day System 100 percent and use all of the products. They’re there for a reason.</li>
      <li>Timing. I learned from Doctor Ina Nozek at a past IsaU that timing on Cleanse Days is crucial.</li>
    </ul>
    <h3>Frank’s Can-Do List of Products</h3>
    <ul>
      <li>Vanilla IsaLean® Pro</li>
      <li>IsaLean® Shake in Creamy French Vanilla</li>
      <li>IsaLean® Shake in Creamy Dutch Chocolate</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getLeanneKSuccessStory(): string {
    return `<h3>One Woman’s Commitment To Herself To Let Go</h3>
    <p>
      Leanne’s journey began the moment she realized she was in a toxic relationship watching someone she cared for deeply about
      take a severe downward spiral in life.
    </p>
    <p>
      "We had loved each other for 14 years," shares Leanne. "Best friends, soul mates, inseparable with fantastic careers and
      high hopes for our future. We were planning to have enough money to retire at 45, travel, live well, and give back
      to make a difference in the world."
    </p>
    <p>
      But, his choices would change her life; forced to sell their dream retirement home and clean out their savings account, all
      to pay back family members, creditors, and the lawyers who all worked tirelessly to fix the financial mess.
    </p>
    <p>
      Her decision to finally let go came while on vacation. "I packed my bags, got in the car and drove to the airport," says
      the Calgary resident. She got on the next available flight back home and never looked back.
    </p>
    <p>
      "The emptiness I felt on that flight home was the size of the ocean below me," expresses Leanne. "I cried the entire eight-hour
      flight home; I had lost the battle. I had fought like hell to try and save it all."
    </p>
    <p>
      Back home, Leanne was left with her thoughts. At 42, she was tired, felt unhappy and without purpose and no longer recognized
      the woman looking back at her in the mirror.
    </p>
    <p>
      "It hadn’t always been this way," recalls Leanne. "I swam at a competitive level, won medals at the Alberta Games, and was
      an award-winning synchronized swimming choreographer and coach. I remember what it was like to be healthy and fit."
    </p>
    <p>
      Leanne decided it was time to hit the gym.
    </p>
    <p>
      To get started, she called her former trainer and Isagenix® Associate Paul Anthony. Paul started her training right away
      on his Dreambody Program and his MindGym series.
    </p>
    <p>
      "Paul also suggested I start taking Cleanse for Life® to remove the toxins in my body," shares Leanne. "I was skeptical because
      I had been having good results with my healthy diet. But, I tried it and was amazed by the results—my energy was
      through the roof."
    </p>
    <p>
      In June 2011, Leanne met Lisa W. while helping Paul finalize her IsaBody Challenge photos. Inspired by Lisa’s success story,
      she joined her team with Paul and started to dabble in the products.
    </p>
    <p>
      By February 2012, Leanne was ready to take on the IsaBody Challenge.
    </p>
    <p>
      "After what I had been through, the Challenge was my choice and my challenge," shares the 2012 IsaBody Challenge finalist.
      "I stepped up my program, increased the intensity of my workouts and stuck to my nutrition plan." The ending results
      are picture perfect.
    </p>
    <p>
      Leanne lost 30 pounds and 20 percent body fat and is a 2012 IsaBody Challenge finalist!
    </p>
    <p>
      "So many overweight people are pre-judged without anyone knowing why they are the way they are," expresses Leanne. "I need
      to share my story and let them know that there is always a way out and that there is hope."
    </p>
    <h3>Leanne’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Set a target and broadcast it! I put my intention out there and I didn’t take my eye off of it.</li>
      <li>Make a vision board. I have one and I spend two minutes when I first wake up and right before bed studying it. To
        date, everything on my vision board has come true.</li>
      <li>Surround yourself with like-minded people that will support you. We all have the power to change. We must first change
        our mind. My trainer taught me that everything happens in our mind first, and everywhere else second.</li>
      <li>Track your progress and keep a diary. It’s neat to look back at a previous month and see your progress. The key is
        to analyze it, correct it and continue on with it.</li>
    </ul>
    <h3>Leanne’s Can-Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
    </ul>`;
  }

  private getLoisLSuccessStory(): string {
    return `<h3>Queensland Woman Proves Age Isn’t a Barrier and Transforms Her Life</h3>
    <p>
      As a Public Servant in the Queensland Government, Department of Corrective Services, Lois works a demanding job, fighting
      sleep at work and on the train, during her long daily commute.
    </p>
    <p>
      "Before Isagenix®, I was overweight, unfit, unhealthy and unhappy, and I hated my pear-shaped body," shares Lois. "My wardrobe
      consisted of black and navy trouser suits to try and disguise my figure. I even shied away from participating in
      sports because the team uniforms might cover less of my body than I felt comfortable with."
    </p>
    <p>
      After several fad diets and programs and liposuction that temporarily worked, Lois was wearing a size 16 for dresses and
      pants, and was at her heaviest.
    </p>
    <p>
      "I looked in the mirror and thought, ‘Life was not meant to be like this,’" says Lois.
    </p>
    <p>
      Upon Lois’ specialist’s suggestion to lose weight after her total hip replacement, Lois’ daughter, after researching several
      options, advised her to find a cleansing program and introduced Lois to Isagenix. While initially skeptical with
      no hope, Lois decided to give Isagenix a try. Today her life—and her body is completely transformed.
    </p>
    <h3>Realizing Her Potential</h3>
    <p>
      Lois began her journey with a 30-Day System™ and lost several pounds,* feeling amazing inside and out. She realized Isagenix
      was something really special and saw the potential for what she could achieve, so she decided to join the IsaBody
      Challenge® to hold herself accountable and motivated.
    </p>
    <p>
      With improvements in sleep, energy, vitality and self-confidence, Lois also noticed that she was better coping with the stresses
      of work and commuting. She even bought hand weights and began resistance exercises, and soon experienced improvement
      in muscle mass, strength and skin tone.
    </p>
    <p>
      After eight weeks, she was most astounded when she lost weight from her hips, thighs and bottom and no longer had cellulite.
      After fifteen weeks, she was down to 121 pounds.* By the end of her 16-week Challenge, she was back to size 8 in
      pants and dresses—the size she was before having children.
    </p>
    <p>
      "Considering the battle I have had for most of my life, to lose weight from my target areas, and then to achieve it so easily
      through Isagenix, brought tears to my eyes," shares Lois.
    </p>`;
  }

  private getMiriamBSuccessStory(): string {
    return `
    <h3>Make a Change for Life!</h3>
    <p>
      Miriam was feeling overweight, sluggish and under the weather. The doctors told her she needed to lose weight or she would
      suffer long-term health issues. "I used to blame my husband for having a big car because I couldn’t fit between the
      two cars in the garage. I didn’t know where to turn as I had tried so many diets that just didn’t work. I bumped
      into a school friend, Tonia P., who looked amazing. I asked her what she was doing. When she told me she had been
      using Isagenix® I asked her to sign me up!"
    </p>
    <h3>Staying Accountable</h3>
    <p>
      "I started with the IsaBody Challenge® to kick-start my weight loss. Jill B., the U.S. 2011 IsaBody Winner, was a huge inspiration
      to me. I began on the 30-Day Program and stayed focused on achieving my goal. After only four days I started feeling
      better and losing weight. It took me just three months to achieve my goal weight. I have more energy, I’m sleeping
      better and don’t feel invisible anymore. I can wear the clothes I want, I’m confident and feel amazing."
    </p>
    <h3>Life Change</h3>
    <p>
      "It wasn’t until I saw my ‘before’ and ‘after’ photos that it really sunk in how much I had achieved. I’m never going back
      to how I used to be! Now I feel like I fit in, I’m confident and comfortable in my own skin. I’m now a certified
      personal trainer and feel better than ever! My husband has lost 33 pounds* and our family is committed to Isagenix
      for life."
    </p>`;
  }

  private getPatriciaHSuccessStory(): string {
    return `
    <h2>IsaBody to IsaBusiness</h2>
    <h3>Before Isagenix</h3>
    <p>
      Trish was feeling unwell, tired and uncomfortable. “I would never let anyone take a full length photo because I hated what
      I saw.??? She tried many different ways to shift the weight but nothing seemed to work.
    </p>
    <h3>IsaBody Journey</h3>
    <p>
      “When Paul and Suzanne introduced me to Isagenix, I grabbed the opportunity with both hands. Not long after joining Isagenix,
      I signed up to the IsaBody Challenge®. The competition was a huge motivator for me. I had friends join the competition
      with me for support; I used the podcasts (IsagenixPodcast.com) and got lots of encouragement from the Home Office.
      I started a 9-Day System within the 30-Day System and the weight started to drop off. After just 30 days I gained
      energy, could sleep better and felt great. I lost 33 pounds* during the IsaBody Challenge and now fit into clothes
      that have been in my wardrobe for years — I’m so proud of myself!”
    </p>
    <h3>Starting a Business</h3>
    <p>
      “I always planned on starting the Isagenix business but I needed to gain the confidence and prepare myself to become a full-time
      network marketer. Once I finished the IsaBody Challenge and became a product of the product, I had all the confidence
      I needed. I’m now committed to Isagenix and take consistent persistent action every day to achieve my goal. I’m 150%
      dedicated to Isagenix.”
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Get informed. Go to the meetings to improve your understanding of the products.</li>
      <li>Absorb yourself in the business.</li>
      <li>Commit to 90 days on the products.</li>
      <li>Eat the frog every morning — do the things you don’t like doing in the morning then you can move onto things you
        enjoy.</li>
      <li>Use the ‘New Associate Interview and Commitment Sheet’ — this gives you a good understanding of what your new person
        is focused on.</li>
    </ul>`;
  }

  private getRebekahHSuccessStory(): string {
    return `<h3>IsaBody Runner-Up Finds Her Key to Success!</h3>
    <p>
      Since university, Rebekah H. has struggled with her weight. When she became a busy mum her health simply went on the back
      burner.
    </p>
    <p>
      "I didn’t realize just how unhealthy I was. My sisters were always skinny but not super healthy, so when I saw the transformation
      they had with Isagenix I knew I had to try the products. I had given birth to my second child and wasn’t feeling
      my best so my sisters suggested I try Cleanse for Life as a way of resting my body. After a short time I saw the
      extra weight start melting away.
    </p>
    <p>
      This is when my sister Kelly suggested I join the IsaBody Challenge®. Wow what a change! I had tried many diets before where
      I would just ‘yo-yo’ up and down but within a month of starting the IsaBody Challenge I felt fantastic! Over the
      challenge I lost a total of 37 pounds* and in total I have lost 51 pounds* with Isagenix, which means I’m back to
      my high school weight!
    </p>
    <p>
      The IsaBody Challenge kept me motivated by giving me a goal to focus on and an incentive to help me keep going. It has helped
      me get my body and my life back on track. I now enjoy exercising with my family and my short-term goal is to compete
      in a family marathon where I push the pram up a five-mile hill.
    </p>
    <p>
      I can now share clothes with my sister again. The best reward of all is that Isagenix allows me to help others gain a new
      healthier lifestyle and in turn I’ve started to build a residual income."
    </p>
    <h3>Rebekah's IsaBody Success Tips</h3>
    <ul>
      <li>Focus on your goals whether they’re fitness, youthful aging, bulking up or losing weight. It will help you stay motivated.</li>
      <li>Help others stay motivated. If you have an accountability partner you can help each other. The feeling of responsibility
        will help you achieve your own goals.</li>
    </ul>`;
  }

  private getTiffDSuccessStory(): string {
    return `<h3>Utah Teacher Turns Lesson Plan Into Action Plan</h3>
    <p>
      Tiff is an avid athlete whose "controlling spirit" proved she was strong enough to play with the big kids.
    </p>
    <p>
      "My passion earned me four varsity athletic letters, an athletic scholarship to a prestigious college, a bachelor’s degree
      in mathematics and secondary education, and a scholarship to graduate school in Washington, D.C," shares Tiff, a
      middle and high school teacher for the Jean Massieu School of the Deaf in Salt Lake City, Utah.
    </p>
    <p>
      She knew she was ready to take on the world.
    </p>
    <p>
      But, days after Tiff graduated from college she would experience a traumatic event that would send her both mentally and
      physically spiraling out of control. As a result, Tiff spent several weeks confined to her home.
    </p>
    <p>
      "I had lost all control of my mind, my life, and consequently my body. The once strong and determined athlete that resided
      within the walls of my dilapidated frame was longing to be found," admits Tiff. "I just wanted to return to the days
      when I was healthy and active."
    </p>
    <p>
      As fate would have it, Tiff’s weight gain would aggravate an old injury, forcing her to contact her old trainer and Isagenix
      Associate Aaron.
    </p>
    <p>
      "What I thought would be just a few training sessions turned into much, much more," shares the Utah resident. "Somewhere
      along the way of rehabbing my injury, I was reminded of when Aaron first introduced me to Isagenix and cleansing
      years ago."
    </p>
    <p>
      Eager to get the same spiritual and mental clarity she experienced in 2006 from cleansing with Isagenix, Tiff joined a second
      time.
    </p>
    <p>
      At the same time, Aaron was rallying Associates to join the 2012 IsaBody Challenge®. Tiff, reluctant at first, decided to
      sign up for extra motivation.
    </p>
    <p>
      After 24 weeks of early morning wake-up calls and high-intensity, 1,000-calorie burning workouts, Tiff is 32 pounds lighter*
      and has just 13 percent body fat.* She was named a finalist in the Challenge and is in better shape now than she
      was as a collegiate athlete. She’s even taken her love for exercise outdoors as an extreme athlete partnering with
      her trainer on adventure races—a multidisciplinary race that can last a few hours or several days, covering up to
      100 miles. She says joining the Challenge was the motivation she needed to make a real transformation.
    </p>
    <p>
      "I needed to reinstate my sense of control and determination," says the 2012 IsaBody Challenge finalist. "I decided to do
      the Challenge not for the money, the cruise or to get a six-pack; I did it to show I could be in control of my life—that
      I was stronger than my mind."
    </p>
    <h3>Tiff’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Have a goal. Without direction you are more apt to veer off course.</li>
      <li>Have a plan. It is far easier to stay on course and hold yourself accountable when you have something in writing.</li>
      <li>Have a support system. Ask your sister, get a trainer but surround yourself with people that understand what you
        are doing and will push you when times get hard.</li>
      <li>Have faith. Everyone has bumps in the road. My trainer calls them "Everest moments" because many climbers who reach
        the saddle of Mt. Everest and are too tired to push forward just turn back. Don’t give up; you CAN do this.</li>
    </ul>
    <h3>Tiff’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes</li>
      <li>Cleanse for Life®</li>
      <li>Vanilla IsaLean Pro</li>
    </ul>`;
  }

  private getAnnieSSuccessStory(): string {
    return `<h3>Flight Attendant Discovers Runway For Dreams</h3>
    <p>
      Annie has always been a big dreamer. But, when her marriage suddenly fell apart she was forced to change many of her dreams.
      A single mother raising two young children on her salary as a flight attendant, Annie found herself reconsidering
      her pathway.
    </p>
    <p>
      "I was sitting at my desk looking at my bank accounts and trying to decide which dreams I was going to live," recalls Annie
      of Ontario. "It really hurt to know that I wouldn’t be able to live all the dreams I had hoped for my children."
    </p>
    <p>
      Even with her tight budget, she realized she’d be spending less money following the 30-Day Cleansing and Fat Burning System.
      No longer would she have to spend as much on groceries or eating out; plus, she even had a more convenient, fast
      solution for her meals between flights, thanks to her high-quality, undenatured whey protein IsaLean® Shakes.
    </p>
    <p>
      "I had been overweight my entire adult life and it was time to start investing in myself so I could be healthier for my children,"
      explains Annie.
    </p>
    <p>
      When her Isagenix sponsor suggested the 2011 Isabody Challenge® with its $120,000 grand prize, this aspiring children’s book
      author knew winning would allow her to self-publish.
    </p>
    <p>
      Considering that all she had to lose was "excess fat," the 32-year-old signed up for Isagenix® and the Challenge and decided
      to go for her dreams (and her dream body!).
    </p>
    <p>
      As she put the products to the test, she recognized that Isagenix just made sense.
    </p>
    <p>
      "This wasn’t rocket science to follow," laughs Annie. "It was all the things I’d heard over the years, but wasn’t sure
      how to apply."
    </p>
    <p>
      On the road, Annie began exercising in her hotel rooms, using the products and watching the scale dip backward.
    </p>
    <p>
      One down side to her shrinking size? The cost of buying new clothes, but according to Annie some things are just worth it.
    </p>
    <p>
      "Not only am I a fit mom, I’m also a hip mom now!" laughs Annie.
    </p>
    <p>
      When she started the IsaBody Challenge, her size 12 flight attendant uniform fit well, but by the end just 15 weeks later,
      she had traded down to a size 4.*
    </p>
    <p>
      Perhaps the best part of Annie’s transformation was seeing how it has impacted her young children’s lives.
    </p>
    <p>
      "Before Isagenix, I was tired of eating chicken nuggets and fish sticks, but I just didn’t have the energy to cook a healthy
      meal for myself," shares Annie.
    </p>
    <p>
      "Now I’m learning new skills and my kids are actually eating—quinoa, turkey and even brussel sprouts."
    </p>
    <p>
      Plus, the kids even watch and help her as she works out at home. The children practice their counting skills and coordination
      as they do jumping jacks with their mom.
    </p>
    <p>
      Named the first-place winner of the Women 18-35 Category of the Challenge, Annie is thrilled by how her 39.5-pound* weight
      loss has changed her family, and her own life, for good.
    </p>
    <p>
      She has earned enough money to cover the costs of publishing her first book and is excited to continue pursuing her Isagenix
      business so she can publish the rest of the children series.
    </p>
    <p>
      "You never know where this journey is going to take you. Isagenix is the solution to living your dreams and making your body
      reflect your inner beauty," explains Annie. "As I was cleansing my body, I was also cleansing the negative self-talk
      from my mind. I’m now a better version of myself."
    </p>`;
  }

  private getAnthonySSuccessStory(): string {
    return `<h3>"Fat Tony" Becomes "Incredible Shrinking DJ"</h3>
    <p>
      From diet pills that took the life of a friend to low-carb fad diets, Anthony had tried it all. He’d put up with the fat
      jokes; the judgmental stares; even public ridicule at a comedy show over his size.
    </p>
    <p>
      Depressed and battling fatigue and anxiety at every turn, the 35-year-old from Pennsylvania was about to start scanning the
      phone book for gastric bypass doctors when an acquaintance from a motorcycle enthusiast forum mentioned Isagenix®.
    </p>
    <p>
      "I watched video after video about Isagenix and it seemed like everyone was sincere about their experiences," shares Anthony.
      "I decided to order it to see what would happen."
    </p>
    <p>
      He also joined the 2011 IsaBody Challenge® so he could have a cash incentive to keep him motivated.
    </p>
    <p>
      As he began replacing his breakfasts and dinners with nutrient-dense IsaLean® Shakes, he began to rethink his eating habits.
      Lunch used to consist of a large pepperoni pizza with extra pepperoni. Doing basic calorie calculations, he figured
      he could either have a huge salad with tuna or chicken, cherry tomatoes and light dressing, or eat one small burger
      to meet the suggested 400 to 600 calories for his midday meal. Suddenly, adopting a healthier lifestyle began to
      click.
    </p>
    <p>
      "It was hard the first week," laughs Anthony. "You might feel angry or other things because you’re not eating like you used
      to, but your body is adjusting to what you want it to do."
    </p>
    <p>
      A DJ by trade, his late night "regulars" knew him as "Big Tony" or "Fat Tony" in the clubs and restaurants. Weeks into his
      Challenge, people began to notice a difference.
    </p>
    <p>
      "They weren’t sure what to say—they wondered if I was sick or if I’d had an operation," recalls Anthony. "Then they started
      nicknaming me ‘the Incredible Shrinking DJ.’"
    </p>
    <p>
      Heavy his entire life, Anthony had never really exercised aside from playing football as a kid simply because he was "the
      biggest kid around."
    </p>
    <p>
      Soon, his mornings and afternoons included trips to the gym, long runs at the local high school’s track, and cycling around
      town. From only being able to walk 20 minutes on the gym treadmill to now running 5ks, Anthony says constantly setting
      and resetting goals kept him on the straight and narrow until he reached his current 140-pound weight loss.*
    </p>
    <p>
      Once a size 6XL and pant size 56, he did the unimaginable just a few short months ago: he walked into a mainstream department
      store to buy clothes.
    </p>
    <p>
      Unaware of his actual size, he began picking up size XL shirts and size 38 pants to see if he could possibly fit into them.
    </p>
    <p>
      "I put them on, looked in the mirror and saw that they actually fit," recalls Anthony. "I started laughing like a little
      kid and crying. I can shop in a normal store again."
    </p>
    <p>
      Recognized as the first place winner in the Men Age 18-35 Category of the 2011 Challenge, Anthony says he’s overwhelmed with
      gratitude for the recognition and $5,000 prize. He’s even starting to dream again.
    </p>`;
  }

  private getGarySSuccessStory(): string {
    return `<h3>Nevada Man Trades in His Blinders for a Better View</h3>
    <p>
      Gary never thought of himself as overweight; in fact, he considered himself relatively healthy compared to other people his
      age.
    </p>
    <p>
      That was until he started to recognize his many setbacks: 50 extra pounds, shrinking clothes and everyday body aches.
    </p>
    <p>
      Gary was out of shape.
    </p>
    <p>
      He was suffering from discomfort in his lower back, knee and feet. Walking for long periods of time was unbearable and taking
      him away from the one thing he cherished most, hiking with his wife.
    </p>
    <p>
      After hearing about the IsaBody Challenge® Gary came to the realization that change was necessary, but he was hesitant about
      how the Challenge could help him.
    </p>
    <p>
      "I was surprised by what the products did for people, but didn’t think it would transform me to the same degree," says the
      53-year-old.
    </p>
    <p>
      Determined to be as energetic and healthy as his friends Gary took the Challenge head on.
    </p>
    <p>
      "I remember thinking as I was taking the ‘before’ pictures for the Challenge and saying to Michelle, ‘I just don’t think
      I am in that bad of shape to be doing this,’" he recalls.
    </p>
    <p>
      Michelle saw what he couldn’t, so to support her husband, she decided to do the Challenge alongside him without officially
      signing up.
    </p>
    <p>
      After a short period on the 30-Day Cleansing and Fat Burning System Gary lost 20 pounds* and felt better than he had at age
      25.
    </p>
    <p>
      The boost increased his confidence and pushed him to move forward.
    </p>
    <p>
      He admits knowing about the $120,000 grand prize, but it wasn’t his primary motivation.
    </p>
    <p>
      "I wanted to be onstage alongside Jim and Kathy Coover," he says. "It was the additional perks: the stage presence, the Founders’
      Gala, the hotel and the camaraderie of the event that attracted me."
    </p>
    <p>
      Fortunately, the onstage presence is what he got. Gary took center stage in August and was recognized as the third-place
      winner in the Men’s 50+ Category. He dropped five pant sizes, three shirt sizes* and has little to no discomfort
      in his knees and feet.
    </p>
    <p>
      The best part is the Challenge proved the power of the Isagenix® products to Gary.
    </p>
    <p>
      His transformation left many awe-struck, including himself, but none more than his niece who joined Michelle’s Isagenix business
      soon after witnessing Gary’s results. She also entered the 2012 IsaBody Challenge. Thrilled by her determination
      Gary plans to coach her through the process.
    </p>
    <p>
      "I now look back at those pictures and understand why I needed Isagenix. I can’t believe how blind I was to my own physical
      health," he shares. "The setbacks and complacency I used to have are now replaced by energy, vitality and hope."
    </p>`;
  }

  private getJakeFSuccessStory(): string {
    return `<h3>Extreme Athlete Turns To Isagenix® for Healthy Recovery</h3>
    <p>
      Jake has always been passionate about extreme sports. His "need for speed" led him to a love for motocross and wakeboarding.
      However, that passion was cut short last year after two separate accidents left him bedridden and confined to a wheelchair.
    </p>
    <p>
      After suffering a torn ACL in his left leg in a wakeboarding accident, Jake then suffered yet another blow during a horrific
      motocross accident. With his quadriceps and ab muscles also torn, Jake began the painstaking process of healing and
      recovery, bedridden for two weeks, ultimately stuck in a wheelchair. The six-month culmination of the accidents and
      necessary rehabilitation transformed the once lean, 174-pound athlete to 215 pounds,* a far cry from his usual physique.
    </p>
    <p>
      With the goal of returning to extreme sports, Jake focused on getting back into peak shape.
    </p>
    <p>
      Introduced to Isagenix eight years earlier by his brother Shane, Jake knew the products worked because he’d already experienced
      the energizing effects as a mountain bike competitor in college.
    </p>
    <p>
      One stroke of luck amid the misfortune in his recovery time aligned exactly with the 2011 IsaBody Challenge®. For Jake, it
      was the perfect stepping stone to full recovery.
    </p>
    <p>
      With his brother as his trainer, and his wife of two years, Sarah, by his side, Jake set a personal IsaBody Challenge goal
      to go from relearning how to walk to reaching his previous six-minute mile pace in 5K and 10K races.
    </p>
    <p>
      "My first month in the IsaBody Challenge was really rehab," says Jake, a director of Fellowship of Christian Athletes. "There
      were no hardcore workouts, it was getting my muscles to rejoin and fire again."
    </p>
    <p>
      Within a few months, Jake had accomplished his goal. He also achieved another milestone weighing 180 pounds* for the first
      time since the accidents. "That was a breath of fresh air," he says. "To go from 215 pounds*, that was huge."
    </p>
    <p>
      By the end of the Challenge, Jake weighed 165 pounds*. He says the last 20 pounds took the most work. His competitive nature,
      results and drive to succeed earned him the second-place prize in the Men’s 18-35 Category of the 2011 IsaBody Challenge.
    </p>
    <p>
      Jake credits the IsaLean® Bars and IsaLean® Shakes for helping him reach his target weight.
    </p>
    <p>
      "I am that guy in the morning that just gets up and goes," he says. "Knowing what you eat can change so many outcomes: your
      skin, your energy and your performance highlights how nutritional value is so important."
    </p>
    <p>
      Since the Challenge, Jake and his wife have relocated to Houston, Texas. They’ve created a workout regimen that affords them
      quality time to work out and run together.
    </p>
    <p>
      Once in need of inspiration, Jake is now the inspiration to others.
    </p>
    <p>
      "You yourself have to experience the product and have a life change so that when you show other people you’re not just showing
      them something, you’re showing them something you’re a part of," says Jake.
    </p>
    <h3>Jake’s Tips for Success</h3>
    <ul>
      <li>Eat six small meals a day.</li>
      <li>Work out in the morning to burn calories longer and set small goals to achieve a week at a time.</li>
      <li>Drink lots of water and snack on almonds and apples during Cleanse Days as needed.</li>
      <li>Have an accountability partner or personal trainer for motivation and encouragement.</li>
    </ul>
    <h3>Jake’s Favorite Products</h3>
    <ul>
      <li>IsaLean Bars®</li>
      <li>IsaLean Shake</li>
      <li>Natural Rich Berry Cleanse for Life® powder</li>
    </ul>`;
  }

  private getJessicaPSuccessStory(): string {
    return `<h3>Wait-And-See Perspective Aids Mom’s Dramatic Transformation</h3>
    <p>
      For years the word "diet" was part of Jessica’s everyday lingo. It was her way of justifying her weight to herself and others.
    </p>
    <p>
      "I’ve always had a weight problem," shares the 30-year-old mom. "As I got older the problem just got worse."
    </p>
    <p>
      And, because of her weight, Jessica would often opt out of activities and sit on the sidelines. "I considered myself a spectator
      in life," says this Wyoming native.
    </p>
    <p>
      But inside, her heart was determined to finally follow through on her word and get fit.
    </p>
    <p>
      "I told everyone that 30 was my year," she says. ‘There comes a time when enough is enough."
    </p>
    <p>
      At 30 years old, Jessica had already given birth to two children. While she was madly in love with her new baby, she was
      also exhausted and overwhelmingly unhappy with her outward appearance.
    </p>
    <p>
      Driven by change, Jessica knew her only line of defense was to tell everyone her plan—especially her family. She was strong
      enough to recognize her own weaknesses, but also knew she needed everyone to hold her accountable in order for her
      to push forward.
    </p>
    <p>
      "I actually wanted to do the 2010 IsaBody Challenge® but found out too late," explains this stay-at-home mom. "So this year
      I was aware of the enrollment dates."
    </p>
    <p>
      To keep her goal in perspective Jessica started with the 9-Day Deep Cleansing and Fat Burning System.
    </p>
    <p>
      After using the 9-Day System™ frequently for a few months, Jessica discovered Ionix® Supreme and fell in love with the product.
      Today Ionix is a staple in her everyday maintenance.
    </p>
    <p>
      "I love coffee," she says. "I used to have three cups of coffee in the morning before I ran. Now, I have a shot of Ionix
      and I feel alive."
    </p>
    <p>
      For Jessica the Challenge marked multiple milestones in her life. Not only did she drop beneath 200 pounds* for the first
      time in six years, but she also ran her first 5k and 10k runs.
    </p>
    <p>
      Her friends and family were enthralled with Jessica’s newfound spirit especially her mom, who lost 63 pounds* in 2003 from
      Isagenix.
    </p>
    <p>
      Thanks to her unwavering efforts and determination, Jessica won third-place in the Women’s 18-35 Category for the 2011 Challenge.
    </p>
    <p>
      Now this 30-year-old stay-at-home mom can’t sit still. She wakes up each morning ready to embrace the day with her children.
    </p>
    <p>
      She’s also considering pursing a career as a personal trainer and becoming a health-and-wellness coach thanks to her newly
      dusted off self-esteem.
    </p>
    <p>
      "I have so much more potential than I gave myself credit for a year ago," she says while sniffling. "It’s an open door. I
      can set my mind on anything."
    </p>
    <h3>Jessica’s Tips For Success</h3>
    <ul>
      <li>Tell everyone what you’re doing and what your goals are. It’s a lot easier to follow through if there are people
        to hold you accountable. It also helps because you have a support system.</li>
      <li>Believe in yourself. If you keep telling yourself that it can’t be done, you won’t do it. Instead, tell yourself
        that you are no longer going to live the life you have been living. Break those old habits and step out of your
        comfort zone. Once you take a leap of faith, there are no boundaries and your potential is endless.</li>
      <li>Get moving! The weight is going to come off quicker and you’ll feel even more amazing if you incorporate physical
        activity into your daily routine.</li>
      <li>Don’t let yourself get super hungry. Eat healthy snacks often.</li>
    </ul>
    <h3>Jessica’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Want More Energy?®</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJillBSuccessStory(): string {
    return `<h3>Biggest Loser Hopeful Becomes Biggest Winner in Life & IsaBody Challenge®</h3>
    <p>
      At 263 pounds and a size 22, Jill was at her wits end. She was desperate to rekindle her close-knit relationship with her
      eldest son, which had been strained due to her weight. She was ready to feel energetic again; ready to shake her
      food addiction for good.
    </p>
    <p>
      Though she began her relationship with Isagenix in 2002, she hadn’t ever truly committed to the lifestyle change. She’d cleanse,
      and then binge on food. Cleanse, binge on food.
    </p>
    <p>
      "I gave Isagenix a bad name," laughs Jill, a dental assistant from Utah. "People in my town must have been thinking ‘well,
      Isagenix must not work because look at Jill.’"
    </p>
    <p>
      Finally, she decided to try out for the Biggest Loser®. Filming her past experiences began to unravel the story she had held
      onto for decades: she was the fat one. As a third-grader, she recalls standing in the nurse’s office and being told
      she weighed more than the school nurse did. Immediately, her mom started her on Weight Watchers® and the dieting
      rollercoaster began.
    </p>
    <p>
      As she reached the semi-finals of the Biggest Loser, Jill made a pact with a friend that if she didn’t get on the show, then
      she would follow Isagenix by the book. Weeks later, she found out she didn’t make the cut. It was time to join the
      IsaBody Challenge® one last time and make the lifestyle change for good.
    </p>
    <p>
      "I was do or die," says Jill. "I knew this was going to help me."
    </p>
    <p>
      After watching her diet closely (no white sugar, flour, grains and limited dairy), using Isagenix and getting active again
      with running and biking, the weight began to come off. By the Biggest Loser finale, Jill had lost 131 pounds.*
    </p>
    <p>
      "I lost more than the female contestants and they were working out six to 10 hours a day," shares Jill. "I just sat on the
      couch and bawled because I was so proud of what I had achieved."
    </p>
    <p>
      Now a svelte size 4 and 132 pounds,* Jill has completed three half-marathons, jumps on the trampoline with her kids (even
      doing backflips!) and is no longer embarrassed by her appearance.
    </p>
    <p>
      "I live in the same town where I grew up and when I was struggling with my weight, if I saw someone I knew go into the grocery
      store, I would sit in my car and wait until they left," admits Jill.
    </p>
    <p>
      "I believe everyone should feel as amazing in their bodies as I do today," says Jill. "I’ve dreamed about this for so long.
      I’m a real person and if I can struggle for this long and make it here, anyone can do this, too."
    </p>
    <p>
      Crowned the 2011 IsaBody Challenge Grand Prize Winner, Jill’s $120,000 prize will go a long way in helping the family achieve
      financial freedom.
    </p>
    <p>
      But, that freedom is nothing compared to the freedom Jill says she now cherishes.
    </p>
    <p>
      Shortly after her transformation, her son asked her to climb a mountain together.
    </p>
    <p>
      "For a second, my fat brain told me I couldn’t do it, but then I realized that everything had changed," recalls Jill. "We
      climbed right up to the top and sat side by side. He told me with tears in his eyes ‘Mom, thank you for getting healthy
      for us.’"
    </p>
    <p>
      From kayaking, riding rollercoasters and bungee jumping to going swimming and running half-marathons, being active with her
      kids and accomplishing feats she never thought she’d be able to do has opened up her world, and her eyes, to a bright
      future.
    </p>
    <p>
      "I’m never going to sit on the sidelines ever again," says Jill. "I’m going to live my life to the fullest."
    </p>
    <h3>Jill’s Tips for Success</h3>
    <ul>
      <li>
        <strong>Stick to the System.</strong> The products work—you just need to follow the instructions. Be sure to watch what
        you eat during your 400-600 calorie meals. Avoid white sugar and flour if possible.</li>
      <li>
        <strong>Don’t Binge and Cleanse.</strong> We all fall off the bandwagon and eat the wrong things. Isagenix is forgiving,
        but don’t abuse it like I did.</li>
      <li>
        <strong>Create a Vision Board.</strong> Start dreaming! On a poster board, put pictures and words that capture what you
        want to accomplish. I wrote that I’d be 132 pounds and a size 4 on May 15, 2011 and I did it!</li>
      <li>
        <strong>Have a Support Team.</strong> Our team hosts Biggest Loser parties where everyone puts a little money in a pot
        and comes together every week. The person who lost the most body percent that week would get the cash and a crown
        on their head.</li>
      <li>
        <strong>Join the IsaBody Challenge.</strong> I sent in so many "before" pictures and never sent in my "after" until this
        year. Use the Challenge as extra motivation and incentive and just do it.</li>
    </ul>
    <h3>Jill’s Favorite Products</h3>
    <ul>
      <li>IsaPro® Vanilla</li>
      <li>Isagenix Snacks!™</li>
      <li>Ionix® Supreme liquid</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getJosephPSuccessStory(): string {
    return `<h3>"Diamond in the Rough" Rediscovers Dreams</h3>
    <p>
      A painful divorce and custody battle left Joseph emotionally drained and unhappy. But, rather than turning to smoking or
      drinking 15 years ago, the former Canadian Armed Forces serviceman took to the fast-food drive thru and began eating.
    </p>
    <p>
      As the weight piled on, acceptance from his family diminished to almost no relationship at all. Alone and feeling discouraged,
      Joseph wasn’t sure if he’d ever be his same old self again.
    </p>
    <p>
      Then, he met his wife.
    </p>
    <p>
      "She saw me for who I was," Joseph shares. "I was her diamond in the rough."
    </p>
    <p>
      After Lorraine stumbled across Isagenix®, she was convinced that it was the answer to helping her husband get healthier and
      back on track to reaching his true potential.
    </p>
    <p>
      Joseph wasn’t so convinced, even after she showed him a DVD featuring people who had lost 100, 200, even 300 pounds* with
      Isagenix.
    </p>
    <p>
      "I thought they were probably paid the big bucks to say what they were saying," laughs Joseph. "But, I looked for someone
      my own age and decided to track that person down to make sure it was true."
    </p>
    <p>
      Joseph’s sleuthing skills led him to Mark W. of Colorado who had lost 300 pounds* with Isagenix.
    </p>
    <p>
      "He put me through to his coach, Al, who phoned me every day," shares Joseph. "Al encouraged me through rough times and celebrated
      with me in the good times. His support has been priceless."
    </p>
    <p>
      He also decided to sign up for the 2011 IsaBody Challenge® to sweeten the deal and give him extra motivation to go after
      his goals to lose more than 100 pounds.
    </p>
    <p>
      Together, Joseph and his wife partnered up for success and began ridding their diet of processed foods and replacing them
      with Isagenix products. Their favorite product is Cleanse for Life®. He even says he can "drink it like juice" because
      he loves it so much. The couple also began staying on the outer aisles of the grocery store shopping for fruits and
      vegetables instead of potato chips and soda.
    </p>
    <p>
      Another bonus? Since they were replacing meals, they noticed that their grocery bills were going down. With the extra money
      saved in their grocery budget, they used the money to put toward their product costs.
    </p>
    <p>
      After Joseph lost more than 100 pounds* during the IsaBody Challenge, the once size 50 also noticed that he began saving
      money on his clothes after reaching size 40.*
    </p>
    <p>
      "A pair of jeans at the big and tall store cost me $60, but then I would pay only $15 for a pair at the regular store," says
      Joseph. "You can fit two of me in my old pair of pants now."
    </p>
    <p>
      Awarded first place in the Men 36-49 Category of the Challenge, Joseph says his life is completely different.
    </p>
    <p>
      "I was truly given a new lease on life—my confidence is back," says Joseph. "I’ve been changed from a fat man with a low
      self-image to a man who is loving and enjoying life."
    </p>
    <p>
      Joseph and his wife now enjoy going back to the fast-food restaurant, but only to savor a cup of coffee and plan how they
      will tell others about Isagenix. The pair love traveling places, working out together and Joseph is looking forward
      to taking his fitness to the next level.
    </p>
    <p>
      "I’ve always loved fitness, but that dream was shattered when I gained all the weight," explains Joseph. "Now I’m working
      on getting a fitness instructor’s license."
    </p>
    <p>
      While Joseph has accomplished his initial goal to lose 100 pounds,* he says he’s still aiming higher.
    </p>
    <p>
      "Now I’m aiming for the 200-Pound Club," shares Joseph. "I’m giving my wife her dream, so she can walk down the street with
      a man in good shape and it feels so good."
    </p>`;
  }

  private getLisaWSuccessStory(): string {
    return `<h3>Unexpected Surprises Takes this Mother on a Life-Changing Journey</h3>
    <p>
      Lisa is used to surprises. She has two children, a husband, a house and her own business—she’s always ready for anything
      thrown her way. What she wasn’t prepared for? Two more little ones!
    </p>
    <p>
      After the birth of her surprise third child, Lisa gave up a successful painting and decorating business to focus her energy
      on Isagenix®. She entered the IsaBody Challenge® determined to lose her post-baby weight. A former personal trainer,
      Lisa was a member of Isagenix seven years earlier and knew her health-and-wellness goals were attainable through
      the Challenge.
    </p>
    <p>
      Weeks into Lisa’s regimented workout she noticed she was bloated and unable to get rid of the excess water weight. Concerned,
      Lisa consulted a doctor only to find out she was 17 weeks pregnant with baby No. 4. Shocked and unprepared for her
      fourth pregnancy, Lisa discontinued working out.
    </p>
    <p>
      "I thought…well this isn’t going to work for some ‘after’ pictures," the 41-year-old chuckled.
    </p>
    <p>
      A year after giving birth to her fourth child, Lisa’s life spiraled out her control. She was unhappy with her appearance,
      unable to lose the extra baby weight, and beyond exhausted. She knew something had to change.
    </p>
    <p>
      Starting with a 30-Day Cleansing and Fat Burning System, Lisa began her life-changing transformation. She was challenged
      even more when she heard that the 2011 IsaBody Challenge had upped the ante to $120,000 for the grand prize winner.
    </p>
    <p>
      "I am a very competitive person so it was just what I needed," says the mother of four. "I needed something to strive toward."
    </p>
    <p>
      Two weeks into her workout, Lisa felt like a whole new person. She swapped her daily five cups of coffee for Ionix® Supreme
      and Ageless Essentials™ with Product B™.
    </p>
    <p>
      Lisa also knew that in order for her to place in the competition she needed to chisel and lean out her physique to match
      that of a fitness competitor. Her daily motivation sprung from looking at the cover of a book featuring a fitness
      model, which she left on her kitchen counter. She worked with her online trainer, changed her diet and put the Isagenix
      products to the test.
    </p>
    <p>
      "I created a formula just for me. I took the supplements at certain times of the day when I knew my body needed them most,"
      she explains. "It’s like my trainer and I created the perfect storm."
    </p>
    <p>
      Her quick, six-month transformation flabbergasted her trainer, who’s been in the field for 20 years. The best part? Her hard
      work paid off and she won second-place in the Women’s 36-49 Category for the 2011 IsaBody Challenge.
    </p>
    <p>
      Now Lisa is pursuing fitness full time and competing as a figure and fitness model. She’s also earned her Pro Card 10 months
      after starting Isagenix.
    </p>
    <p>
      "I was driven by my own ‘why’ factor," she says. "If you don’t know why you’re wanting to shed excess pounds or why you’re
      wanting to transform your body, then you’ll have a really hard time sticking to what it is you set out to do."
    </p>`;
  }

  private getLizMSuccessStory(): string {
    return `<h3>23 Years of Dieting Over!</h3>
    <p>
      I had felt uncomfortable in my own skin since I was 12. I found comfort in food during high school which continued into my
      twenties and thirties. When I did lose weight I would just put it all back on again and more. In total I had been
      dieting for 23 years! My partner Shane and my three-year-old son Max are both very active which I struggled with.
      I had no energy or motivation to play with Max; I had low confidence and was embarrassed to go out in public. I hated
      having my photo taken because I was so embarrassed of my appearance.
    </p>
    <p>
      I entered the IsaBody Challenge® in the hope that I could finally make a change. A turning point for me was celebrating my
      40th birthday with just 11 weeks left to go in the challenge. It was then I really decided I would no longer allow
      myself to live like this and I began my transformation for real. Every day I listened to IsaBody Challenge calls;
      I went to the gym six days a week doing cardio in the morning and weights at night. On the advice of Susan Sly I
      even started doing Bikram Yoga which was way out of my comfort zone!
    </p>
    <p>
      I have experienced an amazing physical and emotional transformation. My self confidence has improved dramatically; I now
      love clothes shopping, going to the beach and even enjoyed having my ‘after’ photos taken for the challenge! Max
      and Shane have their mummy and partner just the way they want; full of life, energy and happiness. My goal for the
      future is to use what I have learnt from the IsaBody Challenge to inspire others.
    </p>`;
  }

  private getMarinaBSuccessStory(): string {
    return `<h3>From Tailspin to Freedom: Marina Rediscovers Energy & Life With Isagenix®</h3>
    <p>
      Marina’s life was in a tailspin. Overcome by anxiety and fear, she could not will herself to leave her home. Meanwhile, her
      husband maintained the home, tended to their two daughters and did his best to try to help her.
    </p>
    <p>
      Doctors didn’t believe they could help her and at one point told Marina and her husband that her life would likely never
      change. They painted a bleak picture of low expectations and a poor quality of life.
    </p>
    <p>
      "I immediately said that I don’t accept that for myself," recalls Marina of that fateful day. "There’s a future for me and
      I am going to heal."
    </p>
    <p>
      The bad news turned into good news for Marina. She committed to finding the right counselor to get through her stress. Little
      by little, Marina began to come back.
    </p>
    <p>
      But, she was still 220 pounds and struggling to lose the 90 pounds she had put on during that paralyzing period. Luckily,
      she came across someone at a women’s university event who was wearing an Isagenix® shirt.
    </p>
    <p>
      "I had a friend who had lost 100 pounds, but I just hadn’t thought it was for me," explains Marina. "I asked her if I would
      get tired of the products and finally, I just realized I wouldn’t know until I tried it."
    </p>
    <p>
      She began with the 30-Day Cleansing and Fat Burning System and was shocked when the excess weight began to come off. She
      heard about the 2011 IsaBody Challenge® and committed to, as her husband often says, "go broke or go home."
    </p>
    <p>
      She’d add berries and Ionix® Supreme to her IsaLean® Shake, an orange and Want More Energy?® or a host of other items. Needless
      to say, Marina soon discovered that she was never going to get bored with her products.
    </p>
    <p>
      Months later, she was down nearly 50 pounds* and transformed from a size 20 to a size 8.* Awarded first place in the Women
      50+ Category of the 2011 Challenge, Marina says she’s floored by how good she feels.
    </p>
    <p>
      "Once, I could barely walk around the block and now I can cycle 110 to 135 kilometers at a time," shares Marina. "I even
      do regular hiking and yoga to stay fit."
    </p>
    <p>
      Her confidence growing daily, she’s proud to have overcome the emotional hurdles that kept her frozen in fear for so long.
      "I used to be afraid to be slim because I didn’t want to attract unwanted attention," says Marina. "My internal story
      has changed and I know I can be slim and safe at the same time."
    </p>
    <p>
      Everything in Marina’s life has changed now. Her family is closer than ever before, she and her husband’s marriage is feeling
      younger and happier and Marina feels like the best version of herself.
    </p>
    <p>
      "People say that I walk differently; that I walk taller and hold my head up," shares Marina. "I look and feel so confident
      now."
    </p>
    <p>
      "There really is hope and healing," adds Marina. "This is where I’m meant to be and Isagenix has been a big part of my healing
      journey."
    </p>`;
  }

  private getNathanFSuccessStory(): string {
    return `<h3>Higher Education Administrator Regains Confidence</h3>
    <p>
      One minute talking to Nathan and he’ll leave you in stitches… of laughter.
    </p>
    <p>
      A self-proclaimed "doctor" in music-know-it-allness, this funnyman once ruled the airwaves as a D.J. in college but has
      since stepped away from his soapbox and stepped up his slimnastics.
    </p>
    <p>
      Weighing 368 pounds* at his heaviest, Nathan was no newcomer to diets. In fact, he has tried most of them; yet always struggled
      to keep the weight off. The culprit for this larger-than-life personality’s matching physique was the on-the-go lifestyle
      that was crammed with pursing his master’s in higher education and late-night chow-downs.
    </p>
    <p>
      After regaining all but six pounds from a previous 110-pound weight loss, Nathan felt hopeless. He was tired of yo-yo dieting.
    </p>
    <p>
      "I remember thinking my apartment was either spotless or messy; either I had money or I didn’t; either I weighed 264 pounds
      or I weighed 368 pounds, there was no balance to my life," says Nathan, a native New Yorker.
    </p>
    <p>
      Introduced to Isagenix® by his father as a birthday gift, Nathan and his dad split the cost of a 30-Day Cleansing and Fat
      Burning System. His very first week, Nathan lost 10 pounds* and regained his confidence.
    </p>
    <p>
      As he gradually lost weight every week, Nathan began transforming his tight 60-inch waist to a 38-inch waist* by walking
      every night. He used his "skinny" clothes from his previous weight-loss attempt as an incentive along with a tattered,
      red button-down shirt which served as his ultimate mark.
    </p>
    <p>
      "Now, my favorite exercise is walking into the Salvation Army and donating all the clothes that no longer fit," he laughs.
      "I often think there is a man behind me, following the same journey, only 30 pounds heavier and in need of ‘better’
      fitting clothes. It’s my way of helping with his journey."
    </p>
    <p>
      Soon, Nathan was 70 pounds lighter.* Walking progressed to weight training, then cycling, yoga, kettlebell training, and
      eventually rock climbing. "I am getting better at rock climbing, especially as my belly gets smaller because I can
      get closer to the wall," jokes Nathan.
    </p>
    <p>
      He entered the IsaBody Challenge® as added motivation for his ever-shrinking waistline. After completing his Challenge period,
      Nathan had lost 42 pounds* and earned the third-place spot in the Men’s 18-35 Category for the 2011 IsaBody Challenge.
      To date, Nathan has lost 81 inches (more than six feet in circumference) off his body and 144 pounds.*
    </p>
    <p>
      Since graduating, Nathan, who has a master’s in higher education administration, has moved to South Dakota and accepted a
      position in Residence Life at South Dakota State University. He’s also entered his second IsaBody Challenge and became
      a Consultant for Isagenix.
    </p>
    <p>
      "I’ve always wanted to try my hand at sales," says the Mount Rushmore resident. "During my first month I signed up 19
      people and created an IsaBuddies Facebook page. I believe it’s important for people to be able to stay in touch and
      motivate each other when working on getting healthier."
    </p>
    <p>
      Not bad for a former disc jockey.
    </p>
    <p>
      "When it comes to health, you can either pay for it now by being healthy or pay for it later with a quadruple bypass. The
      question is: How do you want to spend your money? For me," he says. "It came down to that decision. I was a little
      over a year from turning 30 when I started Isagenix. I figured I could either be 400-plus pounds by then or be in
      the best shape of my life; I think I made the correct choice!"
    </p>
    <h3>Nathan's Tips for Success</h3>
    <ul>
      <li>Really work on getting in tune with your body. It’s going to take hard work and focus but it’s important to realize
        the difference between what you want and what your body needs. Ask yourself, "Did I really want those donuts before
        I saw them or am I just eating out of routine?”</li>
      <li>This is going to be a lifelong commitment so make sure you’re learning about yourself as you go along. The same goes
        with you starting a health regimen. No one is overweight for just one reason, so as you progress through your journey
        make sure you learn the good from the bad. You’re not perfect and you’re going to make mistakes as you progress
        through this. Even a mistake has a teachable moment.</li>
      <li>Be hungry for knowledge; not just food. There is a world of information at your fingertips so get out there and learn
        about ways to be healthy. Don’t be afraid to try new things. It might be adding teas to your diet, trying a new
        dish, a new workout routine, etc. Shake it up and get yourself out there. Try a yoga class, swimming, run a marathon,
        anything. Just keep moving forward and enjoy the ride.</li>
      <li>A lot of these changes are going to come from within but at the same time don’t forget the people that are around
        you cheering you on. If it’s not your immediate family or friends, work with your fellow Isagenix friends because
        they’re going through the same journey as you. They can be the strength and accountability you need when you’re
        feeling like you can’t go any farther.</li>
    </ul>
    <h3>Nathan's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>Ageless Essentials™ Daily Pack with Product B™</li>
    </ul>`;
  }

  private getPamelaMAndKyleSSuccessStory(): string {
    return `<h3>Mother-Son Duo Slims Down & Inspires City to Get Healthy</h3>
    <p>
      IsaLean® Shakes were already a staple of Pamela’s household. As a teenager, her son Kyle had come home raving about the high-quality
      protein shakes after having one for breakfast at a friend’s house. But beyond that, the pair still struggled to get
      healthy and create an Isagenix® healthy lifestyle.
    </p>
    <p>
      After returning home during a break from his university, Kyle noticed that both he and his mother had gained weight.
    </p>
    <p>
      "He said ‘Okay, Mom, let’s do this IsaBody Challenge® together,’" recalls 49-year-old Pamela of Ontario. "And that was it.
      I knew I was going to stick with it because I couldn’t let my child down."
    </p>
    <p>
      The pair devised a plan that included following the 30-Day Cleansing and Fat Burning System to a T, working out regularly
      and keeping their eyes on the 2011 Challenge’s $120,000 grand prize.
    </p>
    <p>
      With their plan solidified, the mother-son duo parted ways and set to work; Kyle back at his university and Pamela pursuing
      her career and goals at home. Thanks to regular phone calls and emails, their excitement remained fueled, especially
      as they shared their successes with one another.
    </p>
    <p>
      When Kyle finally returned home weeks later, both of their jaws hit the floor.
    </p>
    <p>
      "We just hugged each other and told each other ‘you look amazing,’" reflects Pamela. "We just believed and achieved; that’s
      what our Challenge was all about."
    </p>
    <p>
      Pamela, who was once a "tight size 10" had whittled down to a size 4.* Kyle’s 36-inch waist shrunk to a 29.* The most unexpected
      part of their weight loss? Having to purchase new wardrobes.
    </p>
    <p>
      Though getting lean and healthy was satisfying for the duo, they knew they wanted to take it to another level.
    </p>
    <p>
      Next up: getting their city of Brampton, Ontario healthy. They set to work creating a family event that addressed eating
      healthy, exercising and more. The event included an exercise class with the goal to break the Guinness Book of World
      Records for the largest outdoor family circuit training event ever held. Ultimately, they helped inspire other Canadians
      to lose weight, with over 1 million pounds pledged to be lost.
    </p>
    <p>
      Their energy contagious and their confidence surging, Pamela and Kyle began doing things they’d never done before. Kyle took
      his shirt off at the pool for the first time in his adolescent life.
    </p>
    <p>
      "I never wanted to take my shirt off before," explains Kyle. "Now I’m proud to look like this and I don’t feel like people
      are looking at me for a bad reason. They’re looking at me and thinking ‘wow.’"
    </p>
    <p>
      Pamela felt great in a bikini for the first time, 20 years after having her two children.
    </p>
    <p>
      "I loved how I felt as a whole and all of a sudden things weren’t gray anymore," shares Pamela. "I could never have imagined
      how good I could feel and how close I feel to Kyle."
    </p>
    <p>
      Their relationship brought even closer together by the Challenge, Kyle and Pamela say they were floored when they found out
      that they were the first-place winners of the Group Category of the 2011 IsaBody Challenge.
    </p>
    <p>
      Kyle is currently testing to be a certified personal trainer and is anxious to graduate college so he can pursue his Isagenix
      business full time. Pamela is now "attracting fabulous, good friends and business partners" because of Isagenix.
    </p>
    <p>
      "We’re dreaming big," says Pamela. "This is so big; it’s just not us anymore."
    </p>`;
  }

  private getRhondaOSuccessStory(): string {
    return `<h3>Jersey Grandma Turns Back the Hands of Time, Recapturing Her Youthful Look</h3>
    <p>
      After 21 years of marriage Rhonda found herself in a place she never expected: a single mother of two, working full time
      to maintain a stable foundation for her family.
    </p>
    <p>
      Life was not easy living on one income. Long hours forced Rhonda to make poor eating choices, and before long, the excess
      weight began to pile on.
    </p>
    <p>
      By 50, Rhonda was entering the change of life and says her stomach looked as if she was six months pregnant. She started
      to feel self conscious and became discouraged by the 238 pound* woman staring back at her from the mirror.
    </p>
    <p>
      A teacher by trade, Rhonda decided to educate herself on proper nutrition and attended a few classes. She began implementing
      what she learned into her daily cooking and over time, lost 40 pounds and four dress sizes.
    </p>
    <p>
      "I’ve always been between sizes 16-20 for the better part of nearly 20 years," she says. "It was great to finally see that
      kind of change."
    </p>
    <p>
      Over the next few years, Rhonda started to gain weight again and her body began to feel the strain. Her knees began to hurt,
      her ankles started to swell and walking was leaving her breathless; weekend errands resulted in Rhonda returning
      home for an afternoon nap.
    </p>
    <p>
      Tired of yo-yo dieting, Rhonda made a decision to forgo any future diet programs and instead join a gym.
    </p>
    <p>
      Within days of joining a gym she ran into an old friend who told her about Isagenix®. Excited, she went home and combed the
      health-and-wellness Website and even decided to attend a meeting where she met Isagenix Top Income Earner Jimmy Smith.
      Touched by Smith’s words, Rhonda decided to attend 2010 Celebration where she witnessed IsaBody Challenge Grand Prize
      Winner Holly D. winning the crown. Inspired, she decided to join Isagenix and also enter the 2011 IsaBody Challenge.
    </p>
    <p>
      Starting with the 30-Day Cleaning and Fat Burning System, Rhonda decided to do a 9-Day Deep Cleansing and Fat Burning System
      within her first 30-Day System to jumpstart her weight-loss efforts. She lost 11 pounds within the first few weeks
      and by the time she hit her next milestone she was 28 pounds lighter and 85 inches smaller.*
    </p>
    <p>
      "I have renamed Ionix® Supreme my ‘Golden Fountain of Youth,’" she jokes. (It’s her favorite product.)
    </p>
    <p>
      At the end of her Challenge period, Rhonda had lost a total of 55 pounds and 150 inches. She also stepped into a size 9/10
      dress for the first time in 20 years.*
    </p>
    <p>
      Rhonda credits her nutrition with Isagenix, daily workouts, twice weekly cycling classes and twice weekly personal training
      sessions for her incredible transformation.
    </p>
    <p>
      "The best part is seeing people you haven’t seen in a long time and being unrecognizable to them," she shares. "Those reactions
      validate my transformation over and over."
    </p>
    <h3>Rhonda’s Tips for Success</h3>
    <ul>
      <li>Keep your metabolism burning fat by snacking every few hours. Carry your water bottle! Drink 8-10 glasses of water
        a day. The goal is to keep your metabolism active, which will allow your body to burn fat continuously.</li>
      <li>Move your body daily! Exercise is essential to feeling good and looking better helping to reshape your body. You
        can begin by walking around the neighborhood, riding a bike or going to a gym.</li>
      <li>Stick to the plan! If you are doing a 9-Day Deep Cleansing and Fat Burning System or a 30-Day Cleansing and Fat Burning
        System make sure you cleanse without cheating. During your Cleanse Day, drink plenty of water. Deep Cleanse Days
        are key to releasing weight and getting control of overeating. Additionally, cleansing every night by drinking
        2 ounces of Cleanse for Life® before going to bed will help to yield results.</li>
      <li>Meals should always include plenty of fresh vegetables, fruits, and lean cuts of meats. There are many great recipes
        online. Look for recipes that will allow delicious tasting food! Isagenix is not a diet—it’s a lifestyle change.</li>
    </ul>
    <h3>Rhonda’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Orange Want More Energy?®</li>
      <li>Ionix® Supreme</li>
      <li>Orange Want More Energy?</li>
      <li>Cleanse for Life® powder</li>
    </ul>`;
  }

  private getRickKSuccessStory(): string {
    return `<h3>Big Game Hunter Blazes Trail For His Isagenix® Team</h3>
    <p>
      Rick is used to chasing down wild game in the barren, tundra-like landscapes of Alaska. As a big game guide, Dall sheep and
      bear kept him in business. But, Isagenix® also kept the entrepreneur in business as well.
    </p>
    <p>
      A top leader for the company, 59-year-old Rick admits that bad knees and a bad back left him too achy to pursue sports and
      activity beyond his outdoor hunting routines. That all changed, however, when he learned about the new Isagenix®
      Joint and Pain Relief System.
    </p>
    <p>
      "I was surprised when the pain reduced and I really noticed a difference in my joints," shares Rick, after trying the Ageless
      Joint Support™ tablets and Ageless Pain Relief™ Cream. "I realized that I could join the IsaBody Challenge® and finally
      work out the way that I’d always wanted."
    </p>
    <p>
      Extra motivated by the newly announced $120,000 grand prize, Rick set to work developing a workout regimen to whip his body
      into tip-top shape. He stuck to the 30-Day Cleansing and Fat Burning System and committed to his overall health,
      even encouraging his existing and new team members to join him on the Challenge.
    </p>
    <p>
      "I’ve always believed that a leader demonstrates what’s possible," explains Rick. "After being in the company for four years,
      I knew I was going to do it and stay persistent and consistent, even if I felt like it or not."
    </p>
    <p>
      As he pursued daily weightlifting and hour-long cardio routines, he began to notice that his performance and capacity out
      in the field began to explode. Soon, he was even outperforming the young clients as he powered through strenuous
      11-hour hikes up glaciers or hauled out hundreds of pounds of animal. All along, his IsaShaker™ bottle, high-quality
      undenatured whey protein IsaLean® Shake and IsaLean Bars accompanied him as his fuel.
    </p>
    <p>
      "Honestly, it’s easier to do Isagenix when you’re traveling than it is to do anything else," says Rick. "Plus, the IsaLean
      Shake does more for you physically than the expensive dehydrated food."
    </p>
    <p>
      Rick even took his favorite products with him and used them as his main food for 10 days during a long hunt in the remote
      Alaska wilderness.
    </p>
    <p>
      He adds "It’s awesome super food and I felt and functioned great." Back at home, life also began to change.
    </p>
    <p>
      "My kids noticed the difference immediately," shares Rick. "I was able to do things with the grandkids that I never could
      before, like jumping on the trampoline."
    </p>
    <p>
      Named the 2011 Challenge’s 1st-place winner of the Men 50+ Category, Rick proudly lost 31 pounds* and is now sporting a 34-inch
      waist,* leaving him with a chiseled physique and a more youthful countenance.
    </p>
    <p>
      "I feel so much younger and look so much younger," says Rick. "Isagenix products have done wonderful things to help me maintain
      my youth and I love Product B™."
    </p>
    <p>
      Rick now faithfully uses his Isagenix products daily and says he’s proud to be an even stronger example to his team members
      of what is possible with Isagenix.
    </p>
    <p>
      "A leader picks up the heaviest pack and breaks the trail," shares Rick. "I can’t expect anyone to do something I haven’t
      done myself. My team has accomplished amazing things and it’s been a lot of fun."
    </p>`;
  }

  private getToddWSuccessStory(): string {
    return `<h3>Ontario Man Settles the Score on Water Skis</h3>
    <p>
      Todd is an extremist.
    </p>
    <p>
      Growing up, he never thought twice about what he ate. His meals usually consisted of two or three helpings and all the sweets
      he could eat.
    </p>
    <p>
      His mom repeatedly told him that if he didn’t control the amount of food he ate, it would one day catch up with him.
    </p>
    <p>
      She was right.
    </p>
    <p>
      At 25, Todd noticed the pounds slowly creeping up, but attributed them to his increased workouts. A quick peek in the mirror
      proved that Todd was wrong. He wasn’t nearly the fit fellow he thought he was.
    </p>
    <p>
      Over the next 15 years his weight escalated along with his eating habits. Fad diets would only keep the weight off for short
      durations of time before returning.
    </p>
    <p>
      He admits that "none of the diets were sustainable."
    </p>
    <p>
      During a 2009 summer vacation to a friend’s cottage in Crane Lake, Todd and his friends decided to water ski. After two failed
      attempts that landed him belly up in the water, Todd was determined to hang on. He did…only he was flying backwards
      across the water—his weight had snapped the rope that connected him to the boat.
    </p>
    <p>
      "I guess you can say that was my breaking point," he jokes.
    </p>
    <p>
      At his heaviest he was tipping the scale at 250 pounds.
    </p>
    <p>
      Seeing the scale reach 250 pounds left Todd feeling down. He stopped training for the year’s CN Tower climb and no longer
      played with his kids.
    </p>
    <p>
      Ironically, it was the same cottage friend that introduced Todd and his wife, Denise, to Isagenix®. The couple decided to
      give it a try and ordered a 30-Day Cleansing and Fat Burning System. Todd lost 12 pounds* fairly quickly. He was
      so proud of his initial weight loss that he became afraid of running out of his products, so he immediately ordered
      another 30-Day System™.
    </p>
    <p>
      Todd initially set his sights on small weight-loss goals of just 10 pounds at a time. Each time he conquered his 10-pound
      milestone he would raise the bar and strive to lose another 10 pounds.* By the middle of winter, Todd was releasing
      weight so consistently that he decided to set a goal to run a 5K with his 10-year-old son in Nova Scotia a few months
      later. That summer Todd completed the run in 31 minutes, a tremendous achievement for the Nova Scotia native.
    </p>
    <p>
      Amazed by Todd’s current weight loss, his friend suggested Todd sign up for the IsaBody Challenge®. Motivated by his own
      success, Todd signed up. He became significantly more excited when he learned about the grand prize of $120,000.
    </p>
    <p>
      "I kicked my workout into high gear," he says.
    </p>
    <p>
      By the end of the 24-week Challenge, Todd had lost a total of 50 pounds* and took second-place in the Men’s 36-49 Category.
      He’s since lost an additional 15 pounds.*
    </p>
    <p>
      Now the fitter fellow is training for the 2011 CN Tower Climb. His objective is to climb the 144-story building in less than
      15 minutes, three minutes less than his previous year’s climb.
    </p>
    <p>
      As for water skiing, Todd is no longer afraid of foundering in the lake and has conquered the sport once again, sans any
      rope snaps.
    </p>
    <h3>Todd’s Tips For Success</h3>
    <ul>
      <li>Drink lots of water. The more the better.</li>
      <li>Stick with it; it is only 24 weeks and once it is done you will have a new you and a new lifestyle. You will not
        want to go back.</li>
      <li>Don’t be afraid to work out on a Cleanse Day. I have had some of my best workouts during or the day after a Cleanse
        Day!</li>
      <li>You CAN do it. I can think of thousands of reasons why you should not give up!</li>
    </ul>
    <h3>Todd’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Chocolate Cream Crisp IsaLean® Bars</li>
      <li>Vanilla IsaPro®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getBrianRSuccessStory(): string {
    return `<h3>Sandwich Shop Manager Subs Sedentary Life For Cycling</h3>
    <p>
      Even after watching four family members experience dramatic health and weight-loss results with Isagenix®, Brian wasn’t convinced
      it would work for him. But, at 371 pounds, his family was concerned about his health and literally cornered him and
      forced him to sign up by putting his fingers on the keyboard.
    </p>
    <p>
      "I was such a doubting Thomas," laughs Brian of Alberta. "I was just ignoring it all and thinking ‘ya, I’ll prove this wrong
      and I’ll gain weight.’"
    </p>
    <p>
      Fortunately for Brian, he’d have to eat crow on that one, but with his recent history with food, stress and seclusion, it’s
      not difficult to understand why he’d felt that way.
    </p>
    <p>
      Emotionally distraught over the dissolution of his 31-year marriage and already overweight, Brian turned to eating and a
      sedentary lifestyle to get through the pain. The manager of three franchised sandwich shops, the pressure of maintaining
      the businesses on top of his personal heartbreak began to weigh on him. He removed himself from family memories and
      even gave up his love for golf all because he didn’t want anyone to look at him.
    </p>
    <p>
      "I was creating my own little world," Brian confesses. "I was withdrawing and certainly heading down a dark path."
    </p>
    <p>
      That’s when fate stepped in and his family put his fingers to the computer keyboard at Christmas time, making him order a
      30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      Following the 30-Day System’s guide to the letter and leaning on his sisters for support, Brian soon found himself 60 pounds
      lighter* and had conquered his fear of exercising due to his size.
    </p>
    <p>
      To take things a step further, he signed up for the 2010 IsaBody Challenge® and soon, he was a new 100-Pound Club Member.
      His energy through the roof, Brian was sporting new found confidence and knew he wanted to learn more about the incredible
      products that were transforming his body and his life.
    </p>
    <p>
      He decided to attend an Isagenix University near him in Alberta soon after and says he truly had a light bulb moment at the
      event.
    </p>
    <p>
      "I really got a shot of encouragement there because at the end of the conference I got a standing ovation for five minutes
      and about 200 hugs," shares Brian.
    </p>
    <p>
      Now 140 pounds lighter and 10 pant sizes smaller,* the 1st-place winner in the Men 50+ Category of the Challenge says he’s
      loving his new, active lifestyle.
    </p>
    <p>
      "For the first time in 30 years, I’m waking up before my alarm in the morning and ready to exercise right after I get out
      of bed," says Brian.
    </p>
    <p>
      He’s even planning to train for a 700-mile bicycle trip with a triathlete friend of his that spans from central Alberta to
      Vancouver Island and he’s rediscovered his passion for the pastime he gave up because of his size: golf.
    </p>
    <p>
      "I’m not intimidated to be out there anymore and I’m not encumbered anymore by my weight," says Brian. "I feel like a common
      person again, just out to hit the ball around and enjoy myself."
    </p>
    <p>
      Despite his inspiring accomplishments, Brian says his biggest achievement comes from being able to share Isagenix with others.
    </p>
    <p>
      "People notice that I’ve lost weight, but they also comment about my attitude and say they can tell my emotions are in check,"
      shares Brian. "The best reward of Isagenix is being able to help others do this, too."
    </p>
    <h3>Brian’s Tips For Success</h3>
    <ul>
      <li>Find the routine with Isagenix® products that fits into your lifestyle.</li>
      <li>Be very consistent and persistent. Follow the 30-Day System’s instructions.</li>
      <li>Combine Isagenix products with regular exercise; you won’t believe the results. It will also help you understand
        the physical capabilities you have.</li>
      <li>Do a gradual increase in your exercise and when you can, exercise twice a day.</li>
    </ul>
    <h3>Brian’s Favorite Products</h3>
    <ul>
      <li>30-Day Cleansing and Fat Burning System</li>
      <li>IsaFruits®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getEricFSuccessStory(): string {
    return `<h3>How One Boy’s Athletic Dreams Came True</h3>
    <p>
      In high school, Eric’s greatest desire was to play for the school’s basketball team. Although his heart and mind were committed,
      Eric’s 220-pound body held him back and the sports fanatic was relegated to the bench as the stat manager. Heartbroken,
      the 20-year-old went on a dangerous crash diet that quickly took 60 pounds off his 5’8" frame.
    </p>
    <p>
      Ironically, the diet left him too weak and sick to play sports and the weight eventually came back. He was almost back up
      to 200 pounds when his life would finally head towards his athletic dreams. Eric’s best friend, Keller, and his parents,
      Shelley and Bill, had all transformed their bodies with Isagenix and came out winners in the 2008 and 2009 IsaBody
      Challenge® contests. They convinced the 20-year old to give Isagenix® a try.
    </p>
    <p>
      "I went to Celebration in 2008 and they had me try an IsaLean® Shake," recalls Eric of Washington. "I didn’t like it very
      much at first, but the next morning they asked if I wanted one again and from there I was really hooked."
    </p>
    <p>
      After initially losing 30 pounds, Eric slowly let life get in the way as he moved, started college and began working full
      time. Within a year the weight had come back and it was then that Shelley convinced Eric to enter the 2010 IsaBody
      Challenge® as motivation to get into shape for good.
    </p>
    <p>
      Once the budget-conscious college student discovered Isagenix was actually saving him money on groceries, he was all in.
      Living the Isagenix lifestyle became a team effort as Keller moved in and helped Eric make lifestyle changes that
      would keep him on track for the Challenge.
    </p>
    <p>
      The 3rd-place winner in the Men 18-35 Category diligently followed his Isagenix routine and took an excited interest in cooking
      healthy meals. Exercise included intramural sports at school—whiffle ball, soccer, basketball, baseball, football,
      anything and everything he could join—and what Eric dubbed "hidden exercise."
    </p>
    <p>
      "I always looked for excuses to exercise. Anytime I could go without a car, I did," says Eric, who rode his bike to work
      and ran to school each day. "I even bought a recumbent bike to ride while doing homework."
    </p>
    <p>
      Today that inner kid is finally the athlete he’s always dreamed of being. Since high school, Eric’s gone from running an
      8-minute, 30-second mile to finishing a 5K in 18 minutes. He’s also jumped from the bench to almost touching the
      rim and is working on his dunking technique.
    </p>
    <p>
      "I’m loving it," says Eric about his hard-earned athletic prowess. "It’s a whole new kind of respect when you come into a
      gym and you’re someone people want on their team. I’ve never had that experience before."
    </p>
    <p>
      After releasing a total of 30 pounds on Isagenix, Eric has sculpted his physique down to 155 pounds and 8 percent body fat.
      With the transformation, Eric is even more dedicated to promoting an active lifestyle. He recently completed a program
      to become a personal trainer and plans to pursue exercise science and become a sports doctor.
    </p>
    <p>
      "People can see my success and I can show them what it takes to get it done," shares Eric. "If I can share the world of Isagenix
      as well as a healthy lifestyle, that’s fantastic."
    </p>
    <h3>Eric’s Tips For Weight Loss Success</h3>
    <ul>
      <li>If you really want results you can’t just have exercise or diet, it has to be both.</li>
      <li>I never stepped on a scale until I was done with the Challenge. Looking in the mirror is a million times better than
        the scale because you see what you’ve done and not what the scale tells you. That’s a big motivator.</li>
    </ul>
    <h3>Eric’s Favorite Products</h3>
    <ul>
      <li>Want More Energy?®</li>
      <li>IsaPro®</li>
      <li>IsaCalcium®</li>
    </ul>`;
  }

  private getGeriNSuccessStory(): string {
    return `<h3>Isagenix®, a Fountain of Youth For Utah Grandmother</h3>
    <p>
      Geri knew she was way too young to feel so old. Although she always ate healthy and exercised, she had a persistent weight
      problem that only got worse with age. With each pound gained, she gradually decreased her activity level because
      it simply became too hard to move. Her health spiraled further downward after a demoralizing comment from an aerobics
      instructor left her self-esteem devastated.
    </p>
    <p>
      At 261 pounds, Geri was so out of shape she couldn’t even walk her grandkids down the block to school. She was desperate
      to get her quality of life back when Isagenix® came along.
    </p>
    <p>
      "I was scared to death I would do old age in a wheelchair," explains Geri of Utah. "I tried so many things for years, healthy
      and unhealthy, but it was like pulling teeth to lose a pound."
    </p>
    <p>
      Geri was amazed to see how positively her body responded to Isagenix. The stubborn pounds that she hadn’t been able to shed
      in almost three decades were melting off. Soon, she was down 18 pounds* and feeling like she was in her 20s again.
      With just 15 weeks left, Geri decided to enter the 2010 IsaBody Challenge® to further motivate herself, but more
      importantly, to have an outlet to share her story and inspire others.
    </p>
    <p>
      "I started late and had already lost 58 pounds*, but I thought it didn’t matter," says Geri. "It was healthy and it worked,
      and I could still make progress. I was still a winner."
    </p>
    <p>
      With nine weeks left, Geri increased her workouts and started lifting weights. She diligently monitored her portions to stay
      on track with calories and increased her water intake. Her first goal was to get below 200 pounds—a plateau she had
      been stuck on for a while. By the end of the Challenge the 3rd-place winner in the Women 50+ Category weighed in
      at 189 pounds.*
    </p>
    <p>
      "I had not been under 200 pounds since I was 23," says Geri. "I found the person I used to be and it feels great to walk
      into a store and not feel like a spectacle that people look at."
    </p>
    <p>
      Isagenix has been a fountain of youth for the dedicated grandmother. She recently went on a camping trip with her grandkids
      and was able to hike and play with the little ones with no problem.
    </p>
    <p>
      "I have the energy for my grandkids that I was scared I wouldn’t have," says Geri. "I went from feeling old, tired and uncomfortable
      to feeling like I have an amazing future, because now I have a body that can take me there."
    </p>
    <p>
      Currently a Star Consultant, the 51-year-old is having a blast sharing her story and helping others find the same happiness
      and success.
    </p>
    <p>
      "I just know my future is bright physically and financially because of Isagenix," says Geri. "I am full of hope and it’s
      a wonderful way to go into the future."
    </p>
    <h3>Geri’s Tips For Success</h3>
    <ul>
      <li>Don’t skip on the system. Even on days when you don’t feel like it, remember that consistency is so important.</li>
      <li>Everyone hits plateaus; it’s part of weight loss. Don’t get discouraged. Keep doing the program and realize your
        body is going through a lot of changes. Your health is going to be so much better and it’s worth the wait because
        it will come.</li>
      <li>Drink lots of water to assist your body with cleansing.</li>
    </ul>
    <h3>Geri’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Chocolate Cream Crisp IsaLean Bar</li>
    </ul>`;
  }

  private getGregAndLoriannWSuccessStory(): string {
    return `<h3>Isagenix® Helps "Too Busy" Parents Schedule Time For Health</h3>
    <p>
      Greg and Loriann always felt too busy. Between juggling work and various events and obligations for their three kids, husband
      and wife were constantly on the go with no time to cook. Meals were usually what the kids ate—potato chips, corn
      dogs, chicken nuggets—processed food that could be warmed up quickly.
    </p>
    <p>
      While the couple stayed active coaching youth sports, their unhealthy eating habits were sabotaging whatever good they were
      doing with exercise. Both had achieved success in the past with various diets but the results were always short-lived
      due to their busy schedules.
    </p>
    <p>
      Tired of being out of shape, Loriann and Greg were serious about making a lifestyle change when a friend introduced them
      to Isagenix®. They tried the Cleansing and Fat Burning System and released a total of 24 pounds and 24 inches.* When
      the 2010 IsaBody Challenge® came along over a year later, it was the clincher they needed to stay committed for the
      long haul.
    </p>
    <p>
      "It was important to get my husband to do it with me," says Loriann. "I always fell off the horse before because of our schedule.
      It made a huge difference in our success to work together to reach a common goal."
    </p>
    <p>
      The organized couple, who never missed an event on the jam-packed family calendar, created a detailed one just for the Challenge
      that outlined their weight loss goals for the week and the daily requirements to reach them. Cleanse Days, Shake
      Days and meals were all mapped out so they never had to make a decision about what to cook.
    </p>
    <p>
      "Writing it down made things happen," says the couple. "We always thought we were too busy, but what we realized is that
      we never missed anything if it was written on the calendar."
    </p>
    <p>
      Their busy schedules once again got in the way when it came to finding time for exercise. Greg had to fit his workouts in
      during his lunch hour, while Loriann worked out to videos and walked in the mornings before the kids got up. Towards
      the end of the Challenge they struggled with a plateau in their weight-loss, so they combated it by walking together
      along a country road where they lived, challenging each other to "just run to the next telephone pole" and alternated
      walking and running to the ones that followed.
    </p>
    <p>
      "We just had to make the commitment, especially for me because I had to get it out of the way before the kids got up. Plus,
      I couldn’t let Greg get ahead of me," laughs Loriann.
    </p>
    <p>
      Adds Greg, "The kids were watching so it held us accountable. You don’t want to set a bad example. You want to show them
      that when you set a goal you can attain it."
    </p>
    <p>
      Their hard work and planning paid off. Even with a spring break vacation and Easter thrown in between, Greg released 36 pounds
      and 33 inches and Loriann released 25 pounds and 29 inches and went from a size 14 to 8.*
    </p>
    <p>
      "We were eating out all the time during vacation, but stayed dedicated to an IsaLean® Shake every morning," says Loriann.
      "That’s what got us through it all. When we got home we did a 9-Day System to get us right back into it."
    </p>
    <p>
      Adds Greg, "There’s always going to be something, but you just have to get right back at it."
    </p>
    <p>
      Still busy, but much healthier, Loriann and Greg are enjoying more than just a physical transformation. The spouses of 19
      years feel like newlyweds again and have created an even stronger marital bond from the camaraderie of tackling the
      Challenge together.
    </p>
    <p>
      Seeing what their parents have done have also affected their kids’ eating and activity choices. The two older boys started
      weight lifting and even ran a 5K with their parents.
    </p>
    <p>
      The Consultants have also carved out time to work their Isagenix business and are actively building it using the same detailed
      approach and meticulous planning they did for the Challenge.
    </p>
    <p>
      "Doing Isagenix and the Challenge built our self-confidence and gave us the passion and drive to stay fit and to help others
      meet their goals," says the couple.
    </p>
    <h3>Greg and Loriann’s Tips for Success</h3>
    <ul>
      <li>Write down your goals! This is the most important step. Writing it down is like setting an appointment and most people
        don’t miss scheduled appointments.</li>
      <li>Don’t over think the products, just do it!</li>
      <li>Have an end result in mind and break it down into smaller goals. Don’t think you can do it in a week because you’ll
        get discouraged. We also put up pictures of past winners so we could see that end result.</li>
    </ul>
    <h3>Greg and Loriann’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean Shake</li>
      <li>IsaPro®</li>
      <li>IsaDelight® on Cleanse Days</li>
      <li>Chocolate Cream Crisp IsaLean Bar</li>
    </ul>`;
  }

  private getHarleyDSuccessStory(): string {
    return `<h3>Harley Discovers New Lease on Life by Dropping Nearly Half His Size*</h3>
    <p>
      At 360 pounds, Harley was heartsick viewing photographs of his family’s Christmas gathering. One picture in particular really
      hit him hard though— it showed that his girth was wider than the Christmas tree. To make matters worse, he’d dressed
      as Santa Claus to entertain his children, but the costume’s black boots couldn’t fit over his thick calves.
    </p>
    <p>
      "The kids didn’t care, but I sure did," shares Harley from Maryland. "I couldn’t even be a good Santa."
    </p>
    <p>
      His jolliness was further cut short during the holidays by a doctor’s harsh warning, declaring that if he wanted to live,
      he had to lose weight. Harley decided it was time to put aside his poor eating habits and save his own life. That’s
      when Isagenix entered the picture.
    </p>
    <p>
      After a friend gifted Harley with two IsaLean® Shakes, he boldly began his Isagenix journey and committed to the products.
      Soon, Harley replaced breakfast and dinner with shakes and the pounds began coming off. Six weeks in, he went for
      a checkup with his doctor, who was documenting his weight-loss and health improvements. In pure amazement, the astounded
      doctor looked up at Harley and exclaimed, "I don’t know what you’re doing, but keep doing it!"
    </p>
    <p>
      The health benefits Harley began to experience then started showing up on the job. Harley experienced more productivity and
      less pain at work, where he regularly puts together space-saving systems and organizational shelving for businesses.
      Prior to shedding the pounds, his physically demanding job left him with joint and muscle aches.
    </p>
    <p>
      "I’d begin the day with my knees wrapped tight with ace bandages, ice packs tucked inside, to numb the aching," explains
      Harley. "Now, I no longer have to rely on ice packs and pain relief methods."
    </p>
    <p>
      Joining the 2010 IsaBody Challenge® kept Harley committed to his regimen. When he contemplated quitting or even cheating,
      he kept his eye on the $10,000 prize, literally. As a reminder of the potential winnings, he scrawled "$10,000" on
      a piece of paper and clipped it to a photograph of his wife and children on his car’s sun visor. At work, he placed
      similar signs inside his folders. At home, he taped signs, reminding him of the prize, inside kitchen cabinets—starting
      with the snack cabinet.
    </p>
    <p>
      While the prize money initially was a key incentive for Harley, now he has a more meaningful purpose behind his new lifestyle.
    </p>
    <p>
      "Now I realize that the most important thing has been getting my health back," shares Harley. "You can’t put a dollar amount
      on the health and mental benefits I’ve gained. Isagenix has given me back my life."
    </p>
    <p>
      Now nearly half his weight, Harley can easily walk four miles on a mountain trail. Before his success with Isagenix, walking
      a quarter of a mile or tackling the stairs in his home left him winded. With a prior pants size of 54, Harley’s proud
      to share that a size 36 is now too big, requiring a belt.* His achievements inspired those around him including his
      wife, who lost 30 pounds using Isagenix products.*
    </p>
    <p>
      These days, when Harley looks in the mirror, he gets very emotional.
    </p>
    <p>
      "I almost want to cry," says Harley. "That’s the guy I always wanted to be, but couldn’t get there. Now I’m no longer thinking
      of food all the time. It’s kind of like I was a bird in a cage, and now I’m free to sing my own song."
    </p>
    <p>
      Since losing 167 pounds,* and becoming the 1st-place winner in the 2010 IsaBody Challenge Men 36 – 49 Category, Harley wants
      to help others achieve their weight-loss goals.
    </p>
    <p>
      "When I introduce friends and family to Isagenix, I feel I’m getting paid to help people," says Harley. "It doesn’t get much
      better than that."
    </p>
    <h3>Harley’s Tips for Success</h3>
    <ul>
      <li>Drink filtered water throughout the day. You’ll feel full and keep hydrated.</li>
      <li>Set a timer for snacks like fruits and vegetables or an IsaDelight®.</li>
      <li>Sign up for the IsaBody Challenge® and focus on the winnings to stay motivated until you discover your deeper "why."</li>
      <li>Inspire everyone around you to be healthy and fit.</li>
    </ul>
    <h3>Harley’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Bars</li>
      <li>IsaLean Shakes</li>
      <li>IsaPro®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getHollyDSuccessStory(): string {
    return `<h3>Holly Sheds Business Suits for Freedom and Bikinis</h3>
    <p>
      For years, Holly hid behind her business suit. The jacket covered the places she didn’t want to show and the power she felt
      wearing it made up for the insecurity she felt on the inside.
    </p>
    <p>
      Weighing 242 pounds, she always knew that the person who showed up at the office wasn’t the "real" Holly, who was a formerly
      athletic,"popular girl" in high school. But her false reality never sunk in deep enough for her to recognize how
      far away she had strayed away from her former, confident self.
    </p>
    <p>
      Then, she discovered Isagenix® while maintaining her high-stress (and high-paying) job in the corporate environment and became
      curious about the business side. She admits she was actually grateful when she was laid off from her job so she could
      pursue her Isagenix business full time.
    </p>
    <p>
      Unfortunately, while she often lost 20 pounds* on the products here or there, she still never believed that she could create
      a lasting, transformative change and accomplish her health and weight-loss goals.
    </p>
    <p>
      Frustrated that her business seemed to be stalling, Holly turned to an Isagenix Beyond Courage personal development course
      with Chief Training Officer and Senior Vice President David Wood. It was there that she had her "light bulb” moment.
    </p>
    <p>
      "He told me, ‘Holly, when you decide to lose the weight and be a product of the product, your business will explode," recalls
      Holly of Minnesota, who was a 1-Star Silver Circle at the time. "I thought for a minute and realized that he was
      right.’"
    </p>
    <p>
      Little did she realize that by simply committing to the products under the pretense of growing her business that she would
      literally change the course of her life for good and rediscover her formerly confident self.
    </p>
    <p>
      After committing to the 2010 IsaBody Challenge®, Holly hired a personal trainer who worked with many fitness competitors
      and was one herself, Lori H. Taking each day as it came, she focused on the products, listened to popular advice
      shared by top leaders such as Susan S. and began to watch as the scale dip backwards 10 pounds at a time, until she
      reached 52 pounds* lost during the Challenge. But, she still had one more goal to accomplish that she never thought
      was possible: compete in a fitness competition…in a bikini.
    </p>
    <p>
      "I decided in January that I could have the bikini body I wanted and could look hot in one," shares Holly. "When I competed,
      it was a dream. I never thought in a million years I’d be doing a bikini competition."
    </p>
    <p>
      She stuck to a strict training regimen that included running up to 15 miles a day, helping her to even overcome her previously-held
      belief that she disliked running.
    </p>
    <p>
      "I’ve never really been a runner, but now I’m a runner," admits Holly. "Now I’ll be out running and literally do a check—does
      my body hurt? No. Am I breathing hard? No. That means I need to keep going. I really feel it’s because of the products."
    </p>
    <p>
      When she finally walked across the stage in a teeny-bikini at her fitness competition in Florida, she says the experience
      was "awesome." Now she’s committed to competing in even more fitness competitions and already plans to do another
      one in a few months in Las Vegas.
    </p>
    <p>
      Now 90 pounds lighter and seven dress sizes smaller,* Holly says she was able to cut out toxic relationships along the way
      and realize that she was also her own biggest critic and needed to drop her negative self-talk. The dream board she
      has posted in her room features the toned, athletic physique of a fitness model (accomplished) and the goal to reach
      5 Star Golden Circle (now at a 3 Star Golden Circle).
    </p>
    <p>
      Crowned the 2010 IsaBody Challenge Grand Prize Winner and the first-ever female winner, Holly says she’s proud of what she’s
      accomplished and knows she’s on the pathway to accomplishing and creating even bigger dreams.
    </p>
    <p>
      "My world has literally changed," says Holly. "Everything that has happened has given me the confidence to do what I want
      and make it happen."
    </p>
    <h3>Holly’s Tips For Success</h3>
    <ul>
      <li>The secret is in the snacking. Mid morning, have a snack such as a SlimCakes®, and then mid-afternoon, have another
        snack with protein, like half of an IsaLean® Bar. Eating 5-6 times a day keeps your metabolism going.</li>
      <li>For your meal and your snack, always include a lean protein. The more active you are, the more protein your body
        needs to burn fat.</li>
      <li>Take IsaCalcium® right before bed and take as a warm tea or blend it with half of a scoop of IsaPro® and ice and
        water. It helps with deeper sleep.</li>
      <li>Work out—your body can do more than you ever thought your body could.</li>
    </ul>
    <h3>Holly’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>IsaDelight®</li>
      <li>Ageless Actives™</li>
    </ul>`;
  }

  private getJamesPSuccessStory(): string {
    return `<h3>James Quits Sinking Life and Walks on Water</h3>
    <p>
      As a school food service manager, James longed to set a good example for students, but felt helpless about controlling his
      weight, which had steadily increased to 270 pounds. When the swim coach asked James to assist with the school team,
      James worried it was out of his league. It had been 32 years since he had been a part of his own high school swim
      team and, watching the kids swim laps that first day at practice, he worried he’d sink if he jumped in for a rescue.
    </p>
    <p>
      After the school year ended and he began watching his nine-year-old granddaughter, reality hit even harder as he realized
      that he could hardly keep up with her. Soon after, she attempted an intervention for his weight-loss. Having seen
      a highway billboard advertising lap band surgery, she’d asked her parents to pull over to get the phone number.
    </p>
    <p>
      "We’ll make an appointment for grandpa, but tell him we’re taking him out to lunch. He won’t turn down lunch and you can’t
      cancel a doctor’s appointment," said the little girl.
    </p>
    <p>
      When James’ daughter told him the story, he was heartbroken and finally decided to tackle his weight problem.
    </p>
    <p>
      Ironically, James’ brother-in-law visited the next week to attend an Isagenix® convention near James’ home in Anaheim, California.
      Each evening when his brother-in-law returned to James’ home, he was enthusiastic about the convention and James
      and his wife heard many remarkable weight-loss testimonials about people using Isagenix products. Convinced of the
      program’s potential, the couple signed up for the 2010 IsaBody Challenge®.
    </p>
    <p>
      Within a short time, James lost 11 pounds. Then, he dropped another 30 pounds. By November, he’d lost 70 pounds. He completed
      the Challenge down 85 pounds and was chosen as the 3rd-place finisher in the Men’s 36 – 49 Category. James is now
      proud to share that he’s lost 105 pounds using Isagenix products.*
    </p>
    <p>
      "I changed my whole life in one year," shares James. "I feel great. It’s not just the weight loss of over 100 pounds,* my
      health is enhanced. I got the bad stuff out and the good vitamins and minerals in by using the products."
    </p>
    <p>
      James’ wife also achieved success with Isagenix, losing 35 pounds to give up her size 14 pants for a size 6.* The couple
      recently vacationed in Lake Tahoe, where they swam, hiked, and took long walks together. While James used to get
      winded walking around the block, he and his wife hiked eight miles in just one morning of their trip. Recently, as
      a gag, the couple stepped into his old pants, into which they both fit.
    </p>
    <p>
      "We used to just watch TV," James explains. "Now, we’re active together and enjoy talking on our long walks. We have so much
      more to share."
    </p>
    <p>
      James is now an inspiration to his high school students, who witnessed his weight loss during their 10-month school year.
    </p>
    <p>
      "I can honestly say that the students have more respect for me now," he says. "And they trust what I have to say about nutrition
      and fitness. I’m not just relating something out of a text book. I’m living proof."
    </p>
    <p>
      Recently, he gave his granddaughter a piggy-back ride, explaining to her that she represented the extra weight he used to
      carry around. Now she sits on James’ back while he does push-ups. Playing Frisbee and badminton with his granddaughter
      is a frequent and fun weekend activity. He’s often amazed that she’ll tire out before he will.
    </p>
    <p>
      "I get choked up just thinking about it," he says. "People don’t realize that it’s much more than the weight-loss. I’m different
      on the inside. How I interact with everyone has changed. I have more heart. I want everyone to know about Isagenix.
      No more sinking… I’m walking on water now."
    </p>
    <h3>James’ Tips for Success</h3>
    <ul>
      <li>Cut out the junk drinks and have water.</li>
      <li>Have an IsaLean® Bar, when you want something healthy and you’re not at home.</li>
      <li>Eat a high-protein snack like tuna fish to feel satiated.</li>
      <li>Don’t have high-calorie salad dressing. Skip it so you can eat more greens and quality calories like nuts in your
        salad.</li>
    </ul>
    <h3>James’ Favorite Products</h3>
    <ul>
      <li>IsaLean Shake</li>
      <li>Isagenix Greens!™</li>
      <li>IsaLean Bar</li>
    </ul>`;
  }

  private getJeanFSuccessStory(): string {
    return `<h3>Isagenix® Helps "Food-a-Holic" Make Peace</h3>
    <p>
      It’s been more than a year since the beginning of Jean’s incredible Isagenix® journey. A fourth runner-up in the 2009 IsaBody
      Challenge®, the 200-Pound Club member dove into the 2010 Challenge to stay accountable for her success and to hit
      the new goals she had set.
    </p>
    <p>
      "The Challenge kept me on track and inspired. I loved the competitive spirit of it and the fact that I’m competing against
      myself," says Jean. "That’s the heart of the IsaBody Challenge, becoming part of the competition and the process.
      That’s where you’re truly a winner and you get yourself back."
    </p>
    <p>
      To start, Jean set daily goals for Isagenix products and exercise. She did IsaLean® Shakes and Cleanse for Life® every day
      and made the commitment on alternate days to drive 29 miles each way for water aerobics and 32 miles each way to
      go to the gym. When her accountability partner didn’t attend their first swim class, Jean did it on her own.
    </p>
    <p>
      "I was so proud of myself because I continued to go each and every session. The old me would not have done that," explains
      Jean. "I just made a commitment to move more and make my world around my exercise. The body is not meant to be sedentary."
    </p>
    <p>
      Along the way there were personal plateaus to overcome, specifically her long-time battle with food. Jean’s mother used food
      to soothe the 10-year-old after losing her sister and Jean continued the habit into adulthood. Her test came when
      her 90-year-old father-in-law needed extra care. For the first time in her life, Jean didn’t comfort herself with
      food. Instead, she drank extra water with Want More Energy?® and took a walk.
    </p>
    <p>
      "The drama was there, but the commitment to the goal was so strong," says Jean. "Before Isagenix I lived to eat. I was a
      ‘food-a-holic,’ which to me was no different from an alcoholic or drug addict, except you can’t quit eating. Now
      I eat to live. I finally made peace with food for the first time in 50 years—that was a huge breakthrough."
    </p>
    <p>
      Another breakthrough for the yo-yo dieter was losing seven pounds after going on the maintenance program* and believing for
      the first time that she could not only lose the weight but keep it off forever.
    </p>
    <p>
      "I realized through the Isagenix process that I was an all or nothing person," says Jean. "Whatever the diet was, I would
      perform it to its perfection. But once I quit, anything was game. I always gained all the weight back and more. I
      realized I needed balance."
    </p>
    <p>
      To date, the 1st-place winner in the Women 50+ Category has released a total of 201 pounds and shrunk from a size 40 to 16.*
      She’s enjoying a full and active life going more places with her husband of 13 years and volunteering in the community.
      She even hosts a call every week for people who have a lot of weight to lose or who want advice on how to coach those
      who have a lot to lose. She’s passionate about helping people realize that no food is completely "off limits" when
      you have a healthy relationship with food and you’re using Isagenix. Bottom line: it’s all about balance.
    </p>
    <p>
      "It’s incredible to get the call that I was a finalist," shares Jean. "But you win the day you join Isagenix because you’re
      making good choices, releasing the weight and gaining energy. Everything else is extra."
    </p>
    <h3>Jean’s Tips For Success</h3>
    <ul>
      <li>Have an accountability partner. It should be someone you can talk to and keep in touch with, sharing what your goals
        are and where you are at with them. I have two 100-Pound Club members, one in Arizona and one in North Carolina,
        who I talk to through e-mails and phone calls. It’s a two-way street; a cooperative accountability.</li>
      <li>Celebrate each good choice you make. People make a lot of good food choices, but virtually everybody makes bad ones.
        Face that you’re going to make unhealthy choices and then move back into the system. Don’t dwell on it.</li>
      <li>Make a commitment to move more. Even something as small as carrying your groceries in one bag at a time.</li>
    </ul>
    <h3>Jean’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>IsaLean® Shake</li>
      <li>IsaLean Bar</li>
    </ul>`;
  }

  private getMaryASuccessStory(): string {
    return `<h3>Washington Hairdresser Discovers 50 is the New 35</h3>
    <p>
      Mary used to be the life of the party. But that vitality slowly faded through the tribulations of marriage, kids, divorce
      and the change of life. Within the span of 10 years, the Washington hairdresser fell into a deep sadness and let
      her health and appearance go.
    </p>
    <p>
      "I was so down about my life, my schedule, everything," says Mary. "I would wake up on my days off, look around me and literally
      go back to bed. I didn’t have the energy or the will to do anything."
    </p>
    <p>
      Her ultimate push to make a change came after seeing pictures of herself on Facebook. Freaked out by how bad she looked,
      the mother of two immediately called a friend who had been trying to get her on Isagenix®. This time, Mary was ready.
    </p>
    <p>
      It was at the beginning of her Isagenix experience that Mary’s sponsor suggested she sign up for the 2010 IsaBody Challenge®.
      Not knowing, or caring much about it, Mary agreed but wasn’t truly motivated until she discovered she had released
      24 pounds in a short period of time on Isagenix.* Ecstatic, she kicked her healthy habits into high gear.
    </p>
    <p>
      Before, it was too easy for the busy single mother, who spends up to 12 hours a day outside of the house, to grab fast food.
      To save time and make sure her body got the proper nutrition, Mary spent her Cleanse Days making lunch for the entire
      week. ("If I’m not going to eat, I’m going to smell the food!") When her daily walks became too easy, the 50-year
      old joined a gym and started working out with a trainer, even using her after-hours gym key on the nights she worked
      late.
    </p>
    <p>
      "Every day I wake up and I’m ready to get things accomplished," says Mary. "Two years ago I painted my daughter’s bedroom
      and I couldn’t move for three days. Now I can work a full day and still come home and clean the house. I have so
      much energy on Isagenix and I love it!"
    </p>
    <p>
      Mary once thought her life was over at 40. At 50 she looks and feels the best she ever has, and jokes that 50 is the new
      35. Formerly a size 16, the now petite size-6* 2nd-place winner in the Women 50+ Category can now share clothes with
      her 16-year-old daughter and wear the same tight-fitting blouses that the young co-workers at her salon wear. The
      new Associate has been able to help other hairdressers at the salon try Isagenix, as well as many of her clients.
    </p>
    <p>
      "I’m going to be working the business even more because Isagenix has done so much for me and it can help so many people,"
      says Mary. "Isagenix has truly given me back my self-confidence and zest for life, and the most important thing,
      laughter!"
    </p>
    <h3>Mary’s Tips for Success</h3>
    <ul>
      <li>If you live a busy lifestyle or travel, it’s easy to split up the products and meals so they fit into your schedule.
        I split my lunch into three parts because I didn’t have time to sit down and eat a full meal.</li>
      <li>Find a partner that can give you pep talks when you feel discouraged. During one period, I lost no weight at all,
        only inches. My friend told me not to get discouraged, that I was changing from the inside out. She gave me the
        courage to keep going and I lost 14 pounds! She also kept me in check when I wanted to binge.</li>
      <li>If you do binge, just start over the next day and move forward. That’s what I love about Isagenix!</li>
    </ul>
    <h3>Mary’s Favorite Products</h3>
    <ul>
      <li>Want More Energy?®</li>
      <li>IsaLean® Shake in Natural Creamy Vanilla mixed with IsaFruits® and Isagenix Greens!™</li>
      <li>IsaDelight® is your savior on Cleanse Days.</li>
    </ul>`;
  }

  private getMelanieSSuccessStory(): string {
    return `<h3>Washington Woman Skyrockets Her Energy and Feels on Top of the World</h3>
    <p>
      While seated at the salon for a haircut, Melanie intently listened to her hairstylist’s weight-loss success story. Using
      Isagenix® products, her stylist, Shelley, dropped 31 pounds,* got fit, and went on to win the 2008 IsaBody Challenge®
      in her category. At 170 pounds, Melanie was seeking a way to lose weight and boost her energy, but was hesitant to
      try Isagenix.
    </p>
    <p>
      "It’s funny… I listened to Shelley’s success using Isagenix and thought, ‘That just couldn’t be me.’ What if I started, but
      couldn’t do it?" admits Melanie. " I guess I just needed to be ready to change my life."
    </p>
    <p>
      In an attempt to do something about her excess weight and low energy, Melanie began cutting calories and exercising. However,
      the effort didn’t achieve her desired results. She lost minimal weight over many months and still felt lethargic.
    </p>
    <p>
      Then, something in her switched on in her head "like a light bulb." Melanie recalled Shelley’s success with Isagenix and
      finally felt ready. She decided to overcome her fear, and step out and do it.
    </p>
    <p>
      One voicemail to Shelley and a few days later, she took the plunge and began her self-described "mind-blowing results" using
      Isagenix products. Melanie watched as the pounds began to drop, her energy skyrocketed and her mind cleared.
    </p>
    <p>
      "Within a short time, I lost nine pounds* and felt tons of energy. But, even more amazing was my mental clarity. It was as
      if a fog cleared and I found myself," Melanie shares.
    </p>
    <p>
      As a full-time mother to four children (ages 2 to 14) and guardian of a teenaged cousin she had welcomed into her home, Melanie’s
      day-to-day life was often hectic. However, her increased energy and focus helped her to remain relaxed and in control.
      Now, Melanie’s friends often comment on how calm she seems when they come to visit, even as the usual mayhem gets
      well under way.
    </p>
    <p>
      Melanie credits her husband who also embraced Isagenix, even receiving Honorable Mention in his category of the Challenge,
      for helping her stick with the program. These days, the couple jogs and bikes together, and created a successful
      business with Isagenix together.
    </p>
    <p>
      "Isagenix has connected us as a couple," shares Melanie. "We encourage each other and now have so much more to share. It’s
      had a 100-percent positive effect on our relationship."
    </p>
    <p>
      Melanie says she loves who she sees in the mirror now. Until recently, it was tough-going squeezing into her size 12 pants.
    </p>
    <p>
      "I really needed a size 14, but couldn’t face it," she admits, with a laugh. Now, her size eight pants are an inch too big,
      requiring a belt. Her waist shed over six inches, her rear decreased over five inches, and her arms lost two inches
      each.* Her weight-loss of 25 pounds ranked her as a proud 3rd-place winner in the 2010 IsaBody Challenge Women 18–35
      Category. The only thing that has gotten bigger on Melanie these days are her firm and fit calves, grown in size
      due to her new devotion to exercise.
    </p>
    <p>
      "I was convinced I’d never be a runner, or bike and swim. I’d certainly never thought I’d be an athlete," Melanie shares,
      who now bikes 22 miles, swims a half-mile in the lake, and jogs three miles.
    </p>
    <p>
      Melanie’s latest athletic pursuit is training for a triathlon in Seattle near her home.
    </p>
    <p>
      "Now, I know that everything that I thought was impossible is possible," says Melanie. "I feel on top of the world."
    </p>
    <p>
      Her enthusiasm is so contagious that Melanie feels like a magnet attracting even more people thanks to her improved, positive
      spirit.
    </p>
    <p>
      "I’m not just thinner, I feel so much better. People often approach me and want to know what I’ve done," says Melanie. "They
      say, ‘You look like you feel good. I want to feel like that.’ I think they perceive that I finally love myself."
    </p>
    <h3>Melanie’s Tips for Success</h3>
    <ul>
      <li>Take Ionix® Supreme if you don’t get enough sleep. It’s like your morning coffee, but even better because of the
        health benefits!</li>
      <li>Begin your Isagenix program with a family member or friend to help you stay focused and motivated.</li>
      <li>Believe in the products because they really work!</li>
      <li>Take IsaPro® to help you build lean muscle.</li>
      <li>Set an example for your kids by eating well and being fit.</li>
    </ul>
    <h3>Melanie’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Want More Energy?®</li>
      <li>Cleanse for Life®</li>
      <li>IsaPro®</li>
    </ul>`;
  }

  private getMercedesRSuccessStory(): string {
    return `<h3>At Rock Bottom, 40-Year-Old Transforms Body and Life With Isagenix®</h3>
    <p>
      Just before discovering Isagenix®, Mercedes was going through a very dark period in her life. The 40-year-old was reeling
      from a miscarriage, the aftermath of which eventually ended her relationship, taking with it the business she shared
      with her former partner. She was suddenly alone, unemployed and 45 pounds heavier due to complications from the pregnancy.
    </p>
    <p>
      The extra weight dramatically changed her petite 5’1" frame and Mercedes desperately tried everything to lose it, even spending
      $400 on a personal trainer. After 30 days, the Georgia resident had lost just one pound.
    </p>
    <p>
      "I worked out three times a week, ate healthy and took supplements and even medication to try to fix things, but nothing
      worked," says Mercedes. "I looked in the mirror and realized it didn’t matter what I did. My hope was gone and that’s
      when I felt completely let down."
    </p>
    <p>
      At rock bottom, Mercedes ironically discovered Isagenix through her ex. His mother thought it could be the solution Mercedes
      desperately needed. Leery of spending more money on something that wouldn’t work, Mercedes started with the 9-Day
      Cleansing and Fat Burning System reasoning that she didn’t have much else to lose by giving the lower-cost system
      a try.
    </p>
    <p>
      Just a few days in, she was down 5 pounds* and immediately put in an order for a 30-Day System so she’d have something after
      her initial supply ran out. Experiencing such positive results was a confidence boost for the Georgia resident. She
      signed up for the 2010 IsaBody Challenge® and relished the newfound purpose and laser focus it gave her.
    </p>
    <p>
      "If you want to get to a goal, the IsaBody Challenge® will help you get there," says Mercedes. "It will help give you that
      focus so you can be successful."
    </p>
    <p>
      Not willing to take anything for granted, she exuberantly embraced the Challenge as a measure to see how far she could go.
      Wanting to be more muscular and have better health, she ambitiously trained with a grueling six-mile run/hike, three
      times a week up and around one of the toughest mountains in the area. She also took up Zumba, a Latin dance/aerobics
      class. She even got her certification as an aerobics instructor recently because she loved it so much.
    </p>
    <p>
      Already ingrained with healthy eating habits, Mercedes never missed a day of IsaOmega Supreme®, IsaLean® Shakes, Isagenix
      Greens!™ and Ionix Supreme®.
    </p>
    <p>
      The life that Mercedes has today is reflective of the dream board she created at the beginning of her Isagenix journey. Now
      a svelte 103 pounds,* the 3rd-place winner in the Women 36-49 Category is currently a Consultant working toward becoming
      an Isagenix Millionaire. She is feeling secure and hopeful again thanks to the supportive family she’s found at Isagenix.
    </p>
    <p>
      "This is the happiest and healthiest I’ve felt in my life," says Mercedes. "Isagenix works and the people in the company
      really care and want you to succeed."
    </p>
    <h3>Mercedes’ Tips For Success</h3>
    <ul>
      <li>Do an exercise that you love. I love to dance, so I do Zumba, a mix of Latin dance and regular fitness classes.</li>
      <li>If you fall off the program, just get right back into it. If I go out and eat something that’s unhealthy, I take
        an IsaFlush!® and some Cleanse for Life® or do two Cleanse Days.</li>
      <li>Before Isagenix, I didn’t know that you needed 25 grams of fiber a day. The IsaLean® Shakes with the Isagenix FiberPro™
        are a tasty way to get fiber into your diet.</li>
      <li>Put your goals in writing as a way to stay focused every day. I did a dream board of things I wanted and several
        things have already come true—like being a finalist in the IsaBody Challenge!</li>
    </ul>
    <h3>Mercedes’ Favorite Products</h3>
    <ul>
      <li>IsaOmega Supreme®</li>
      <li>IsaLean® Shake</li>
      <li>Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Essentials for Women™</li>
    </ul>`;
  }

  private getMichaelOSuccessStory(): string {
    return `<h3>Social Worker Turns Focus On Self, Releases 185 Pounds*</h3>
    <p>
      Michael felt like a hypocrite counseling clients to set and achieve goals when he couldn’t even succeed at losing weight.
      The 27-year-old licensed social worker was dangerously overweight and already on medications to keep his health challenges
      in check. Everyday activities like visiting clients or walking up the stairs from his living room to the kitchen
      became extreme physical challenges. Doctors and his wife feared for his life. Introduced to Isagenix® by a friend,
      Michael didn’t take it seriously at first because he was so discouraged by years of failed weight loss attempts.
    </p>
    <p>
      "I tried everything to lose weight and I just couldn’t do it," says Michael of Nevada. "I didn’t think Isagenix would work.
      I bought some products but wasn’t serious about it until a year later when I hit 410 pounds."
    </p>
    <p>
      After the first three months, Michael was shocked at how much weight he was releasing each month. It was in that first package
      that he saw a copy of IsaNews magazine featuring the winner of the 2009 IsaBody Challenge® on the cover that everything
      clicked. Feeling encouraged by his initial results, he signed up for the 2010 Challenge for extra motivation.
    </p>
    <p>
      "I’m still shocked that I got this far," says Michael, who lost 146 pounds and 133.5 inches* during the Challenge. "Doing
      Isagenix felt so easy to me that I figured there were tons of people losing a lot of weight. I didn’t even think
      I’d be in the running."
    </p>
    <p>
      Reading books on nutrition, cooking organic meals and working out became a fun bond for Michael and his wife of five years,
      Heather, who lost 20 pounds* with all the lifestyle changes. With less weight to carry, the 2nd-place winner in the
      Men 18-35 Category was able to start walking and eventually move up to jogging. Once the scale dipped below 300,
      Michael hit the pedals on his road bike. To further stay motivated, husband and wife signed up for various races
      and even a triathlon.
    </p>
    <p>
      "Finishing the triathlon was huge. I biked, swam and ran the whole thing," remembers Michael. "I always envisioned myself
      as overweight and not able to do those things, but after that I realized I was in good shape."
    </p>
    <p>
      No longer facing physical challenges, Michael is celebrating breakthroughs. For the first time in five years he weighs less
      than 300 pounds* and he can ride 70 miles on his bike and run six miles with no pain. No longer anxious in big groups,
      Michael and Heather are enjoying trips to the mall and playing board games with friends. Best of all, he can now
      proudly look his clients in the eyes and inspire them to do their best.
    </p>
    <p>
      "People ask if I got surgery because of my rapid transformation. I can proudly say it was hard work and Isagenix," shares
      Michael. "I feel like a new person."
    </p>
    <h3>Michael’s Tips For Success</h3>
    <ul>
      <li>Sign up for races. For me, they were fun to do with my wife and a great way to stay motivated and on a regular training
        schedule.</li>
      <li>A lot of people are concerned about Cleanse Days. I usually do it on a day off from work and that seems to work well.
        Figure out what’s best for you though and stick with it.</li>
      <li>I drink at least half my body weight in ounces, typically two gallons of water per day.</li>
    </ul>
    <h3>Michael’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>Cleanse for Life® powder</li>
    </ul>`;
  }

  private getMichaelWSuccessStory(): string {
    return `<h3>Isagenix® Gives "Dying" Man New Hope</h3>
    <p>
      Michael should have felt hopeful for the future after recently graduating from college. Armed with an accounting degree,
      the 23-year-old went to interviews, but never heard back. He suspected potential employers saw him as a risk at 383
      pounds. It didn’t help matters that he struggled daily with feeling down and often dreaded getting out of bed in
      the morning. Self-conscious about his weight, Michael mostly kept to himself and ate to soothe his pain.
    </p>
    <p>
      "It was my comfort and I was always eating fast food and overeating to feel better," says Michael of Georgia. "I had no self-esteem.
      I just didn’t want to deal with myself."
    </p>
    <p>
      Little did he know that a routine visit to a chiropractor would change his life forever. It was his mom’s appointment, but
      the doctor was more focused on Michael, telling him point-blank that he would die if he didn’t do something. Although
      his family had been pleading with him for years to lose weight, it was the doctor’s frank warning and suggestion
      to try Isagenix® that finally did it for Michael.
    </p>
    <p>
      "I didn’t know if Isagenix would really work for me, but then I lost 30 pounds,*" says Michael. "Plus, after I was using
      the products for a while, it didn’t feel like it was going to be like a lot of diets out there where it was going
      to work for a few months and then I would rebound. I haven’t gained a pound back yet."
    </p>
    <p>
      At 350 pounds Michael was told about the 2010 IsaBody Challenge® and the chance to win a vacation and money. He committed
      to the Challenge, but kept his focus on losing weight instead of winning.
    </p>
    <p>
      The Georgia resident cut his dependence on southern staples like fried food and sweet tea and replaced them with fish, vegetables
      and lots of water. When he felt comfortable enough to join a gym, he eased into working out just 30 minutes each
      time. He is now up to two hours and also swims two days a week. His bonus exercise is the yard work he does on his
      family’s two-acre spread.
    </p>
    <p>
      "Last year, I could hardly do the job," says Michael. "It took me almost three days but now I can do most of it in one day."
    </p>
    <p>
      In April, the 1st-place winner in the Men 18-35 Category hit his biggest milestone—100 pounds lost.* He’s now about 43 pounds
      from his goal weight of 190, but at 233 pounds, Michael already feels like a winner. No longer shy and self-conscious
      around people, he even volunteers and does yard work for his church and joined the choir.
    </p>
    <p>
      "I’ve become a better person," says Michael. "I am doing things now that I never thought I could do. I appreciate my second
      chance at living knowing how much effort it takes. Thanks to Isagenix, I am motivated to live and maintain my healthy
      lifestyle.”
    </p>
    <h3>Michael’s Tips For Success</h3>
    <ul>
      <li>Don’t do it for anybody else. You have to be committed and motivated and really want it for yourself.</li>
      <li>Set small goals. I started with 30 minutes a day at the gym. I learned to slowly build up the time and not wear myself
        out.</li>
      <li>It’s OK to take a rest and stop during your workout. When I started running, I took a rest and drank water every
        time I ran out of breath. Now I can do about 20 minutes on the treadmill without stopping.</li>
    </ul>
    <h3>Michael’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Bar</li>
      <li>IsaFruits®</li>
      <li>Want More Energy?®</li>
    </ul>`;
  }

  private getOraliaASuccessStory(): string {
    return `<h3>An Emotional Journey Has Happy Ending For Texas Mom</h3>
    <p>
      A newcomer to the neighborhood, new mom Oralia joined the local Mom’s Club hoping to make friends. But next to the other
      young, fit mothers the 47-year-old felt out of place. During play dates, 293-pound Oralia stood while the other moms
      played on the floor with their kids. Self-conscious about her weight and wanting to avoid the awkward social situations
      around it, Oralia became less active in the Mom’s Club and quit attending the play dates altogether.
    </p>
    <p>
      Desperate to find a permanent weight-loss solution, Oralia became fixated on the idea of going through with a drastic weight-loss
      surgery and even managed to persuade her skeptical husband to spend the money. But elation soon turned to disappointment
      and despair after her research uncovered too many stories of desperate people who had gained all the weight back.
      She could no longer justify the cost to herself and the stay-at-home mom reluctantly gave up on the idea, along with
      her last shred of hope. She was devastated.
    </p>
    <p>
      Through tears, Oralia remembers, "When I gave up the idea of surgery I thought there was no future for me. I thought of my
      son and how he would feel when he was old enough to realize he had a mom who doesn’t come to games and school functions
      because of her weight. I was eating myself closer to a premature death."
    </p>
    <p>
      Strangely enough, it was a scrapbooking blog that saved the Texas mom from her fearful prophecy. That day, the entries didn’t
      come up about scrapbooking, but instead, the blogger’s exciting weight loss of 30 pounds* on Isagenix®. Full of anticipation,
      Oralia googled Isagenix and read everything she could.
    </p>
    <p>
      "I got very excited because I thought this could be for me," explains Oralia. "I saw the 100-, 200-, and 300-Pound Club and
      all the people who were keeping the weight off. The athlete profiles were especially exciting, discovering that even
      they were turning to Isagenix to lose weight and get to their healthiest."
    </p>
    <p>
      A "rule follower" by nature, Oralia’s first few days on Isagenix were shaky. After talking with someone at Isagenix World
      Headquarters, she learned that the 30-Day Cleansing and Fat Burning System was actually quite flexible and that it
      was OK to adjust how she used the 30-Day System. For her, it was eating whenever she got hungry, which was sometimes
      every hour. Within weeks she saw results and then dramatic weight loss over the following months.
    </p>
    <p>
      "Nothing was going to stop me," shares Oralia. "I saw the 2010 IsaBody Challenge® and signed up right away. I set my sights
      on the 100-Pound Club, as well. The old me that was so self-conscious, embarrassed and disgusted was going away and
      coming out was this person I didn’t recognize. I sure was enjoying getting to know her though."
    </p>
    <p>
      Pumped about her progress, Oralia left her elliptical machine at home behind and joined a gym. Motivated by the gym’s uplifting
      atmosphere, the once sedentary homebody fell in love with spin classes. By the end of the Challenge the former size
      30 was 72 pounds lighter and fitting into a size 18.*
    </p>
    <p>
      When she got the call, the 1st-place winner in the Women 36-49 Category and her husband cried because of what she had accomplished
      on her way to creating the new Oralia—a Mom’s Club president, soon-to-be aerobics instructor and Consultant with
      Isagenix.
    </p>
    <p>
      Oralia’s transformation has inspired her husband, who lost 50 pounds,* as well as people from the gym who came out of the
      woodwork after seeing her 100-Pound Club pictures.
    </p>
    <p>
      "This journey is still filled with emotion," says Oralia. "I absolutely love that I have an incredibly active lifestyle.
      I was never able to say that before Isagenix!"
    </p>
    <h3>Oralia’s Tips For Success</h3>
    <ul>
      <li>It’s OK to eat if you’re hungry, just keep it healthy. Even if you’ve eaten something that’s not healthy that day,
        drink the IsaLean® Shake to give your body instant, superior nutrition.</li>
      <li>Don’t be so strict with yourself that you feel deprived. I occasionally indulge and am grateful I have Isagenix there
        waiting for me.</li>
      <li>Find an exercise you love doing. I started on an elliptical trainer at home, but soon got bored and joined a gym.
        I discovered that I loved going out of the house to work out. I take advantage of the classes at the gym, especially
        Body Bar and Spin.</li>
    </ul>
    <h3>Oralia’s Favorite Products</h3>
    <ul>
      <li>Chocolate Cream Crisp IsaLean® Bar</li>
      <li>IsaLean Shake in Natural Creamy Chocolate</li>
    </ul>`;
  }

  private getPatrickDSuccessStory(): string {
    return `<h3>Runner Loses 90 Pounds and Rediscovers New Self in Midst of Tragedy</h3>
    <p>
      Patrick is a runner.
    </p>
    <p>
      In one sense, being a runner for Patrick was a good thing. At 310 pounds, he trained his heart out with his siblings as part
      of a cancer research fundraising team, determined to complete his first marathon, make a difference and honor his
      mother who was battling cancer at the time.
    </p>
    <p>
      Riding high after such a big accomplishment, he and his family gifted their mother with their four finisher medals and a
      large trophy with a female runner on it. The inscription on the plaque read "The Courage Award 2006" for their mother
      who " is the most courageous person we know…who runs her own marathon every day…battling cancer." The family rejoiced
      in their accomplishments and reveled in one another’s company, enjoying an outing to Disney World together.
    </p>
    <p>
      Just 16 days later, Patrick’s mother passed away. That’s when the running took a bad turn. Falling into deep despair, he
      sought refuge on his couch watching TV and eating to soothe the pain. His running shoes remained in his closet untouched.
      Though he had lost a significant amount of weight during his marathon training, it all piled back on and then some.
    </p>
    <p>
      His struggle only worsened as he and his family worked to try to comfort their father who had reached his limits and had
      lost his will to live. Several months later, Patrick’s father was gone too.
    </p>
    <p>
      At first, he was broken, unsure of what to do to pick himself up from the immense tragedy he had waded through. Then, his
      landscaping friend and former IsaBody Challenge® winner reminded him of Isagenix® and something clicked.
    </p>
    <p>
      His friend Mike had experienced tremendous results, losing 60 pounds and 20 percent of his body fat.* Patrick longed for
      that and more, so in November of 2009, he set his plan, with a goal to run seven endurance events, drop 100 pounds
      and win the 2010 IsaBody Challenge.
    </p>
    <p>
      He had turned back to running, but this time, he was running towards a new life. He committed to the 30-Day Cleansing and
      Fat Burning System, nourishing his body with IsaLean® Shakes with high-quality whey protein, fresh berries and bananas
      after each training run. As his energy increased and he continued to put in his miles, he began to see his times
      dropping and soon, he wasn’t "dead last" in many of the races he competed in. Patrick made good on his first goal
      and ran 10 half marathon races and three full marathons during just the seven-month Challenge time period, with a
      total of 24 races completed and more than 250 miles run. Three of those marathons were all within a six week timeframe.
      Each mile and pound represented more time to process and reflect on the tragedies he’d overcome in less than a year.
      Patrick admits he couldn’t "save the life of my mom or dad, but I realize now that I could save the life of someone
      else."
    </p>
    <p>
      "My mission is to inspire other people to make a change for the better," shares Patrick. "If my story inspires one person
      to make a change for the better, then I’m doing in my own small way God’s work. Isagenix is that vehicle for change."
    </p>
    <p>
      Now 90 pounds lighter with a chiseled physique and a waist that’s transformed from a 42 size pant to a 34-sized pant,* his
      journey with the IsaBody Challenge has gone beyond the "weight-loss contest" that many others might think it is.
    </p>
    <p>
      "The IsaBody Challenge is a metaphor for life," shares the 46-year-old from New Jersey. "You have to break barriers and do
      things that you once thought were impossible that are now possible. It’s a self-discovery process."
    </p>
    <p>
      The 2nd-place winner in the Men 36-49 Category says he’s put aside his "workaholic" ways and is proud of his new healthy
      lifestyle. Getting choked up, he says his parents would be proud of the change he’s made.
    </p>
    <p>
      "Isagenix is more than a weight-loss company and the IsaBody Challenge is more than a biggest loser contest," says Patrick.
      "I got my life back."
    </p>
    <h3>Patrick’s Tips For Success</h3>
    <ul>
      <li>Follow the 30-Day Cleansing and Fat Burning System and execute the plan.</li>
      <li>Find your compelling why—your "motive" behind the "motivation." That’s the fuel to get you from where you are to
        where you want to be.</li>
      <li>Set goals far in advance and chip away at them with everything that you do.</li>
      <li>Drink lots of water and refuel your body with IsaLean® Shakes after a tough workout.</li>
    </ul>
    <h3>Patrick’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>IsaLean Bars</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getAprilWSuccessStory(): string {
    return `<h3>Aspiring Mom Takes Control of Health and Gets Closer to Starting Family</h3>
    <p>
      While her friends were having their second and third child, April’s dream of having a family was put on hold because of her
      weight. The 27-year-old’s habit of working all day and skipping breakfast and lunch to keep up with a home-based
      business had taken its toll. Her weight at an unhealthy 353 pounds, she feared she’d never be able to start a family.
    </p>
    <p>
      The job’s demanding hours and around-the-clock schedule left no time or motivation for exercise or sleep and she found herself
      bingeing on unhealthy snacks and high-calorie fast food meals late at night. The high-stress, sedentary lifestyle
      left April miserable and the heaviest she’d ever been.
    </p>
    <p>
      "I’m normally a happy, social person, but that started to fade away being secluded in my home office all day," admits April
      of Florida. "I was so uncomfortable about my weight that I hid from the world behind a computer screen."
    </p>
    <p>
      With life-long weight struggles and failed attempts at every diet imaginable, April was considering weight-loss surgery.
      Fortunately, her mom persuaded her to give Isagenix® a try and sign up for the 2009 IsaBody Challenge®.
    </p>
    <p>
      She half-heartedly agreed and was happily surprised when she lost her first 20 pounds and 26 inches.* She became convinced
      that Isagenix was her solution and fully committed to the Challenge.
    </p>
    <p>
      A little while later, after losing 45 pounds,* April found the courage to emerge from behind her computer and take up workouts
      like hot yoga and Zumba, a Latin dance class. If she couldn’t get to a class or the gym, she ran the stairs in her
      two-story condo.
    </p>
    <p>
      Along the way, April says the thought of starting her family kept her pushing forward. Her husband of five years even lost
      30 pounds* from all of the lifestyle changes.
    </p>
    <p>
      "I didn’t want to be fat and pregnant," shares April, who lost a total of 63 pounds and 65 inches* during the Challenge.
      "I want to be healthy and raise healthy kids. Isagenix is helping me to get there."
    </p>
    <p>
      All through the Challenge, April received encouraging comments from her friends as she chronicled her progress on her Facebook
      page. Because of the stories she’s heard from people who’ve been in the same place, she’s now committed to inspiring
      others toward the health and happiness she’s discovered.
    </p>
    <p>
      Third-place winner in the Women 18-35 Category, April has transformed herself from miserably obese to exuberantly fit and
      is now enjoying a healthier work-life balance, improved sleep and even a new wardrobe. She’s still focusing on making
      her goal weight of 140 pounds before her wedding anniversary, but she’s confident that she’s solidly on her way there.
      She and her husband are looking forward to starting their family soon, now that they’re both living healthier lives.
    </p>
    <p>
      "Whatever my future holds it’s going to be related to my new healthy lifestyle," shares April. "Isagenix has changed my life!"
    </p>
    <h3>April’s Tips For Weight-Loss & Health Success</h3>
    <ul>
      <li>Put goal posters up with images representing what you want to accomplish as motivation. I had to see and visualize
        my goals every single day and it really helped me keep going.</li>
      <li>Print the stories from Isagenix.com of previous IsaBody winners to see what they did. Visit IsaBodyChallenge.com
        and get tips on how to get started.</li>
      <li>Get off the couch and do something. Exercise is a big part of weight loss. You don’t have to join a gym or get a
        treadmill. Simply walk around the block or do jumping jacks in your living room. There are so many free resources
        for exercise.</li>
      <li>When I eat out, I look at the menu beforehand by going to the restaurant’s Web site. Then, when I get there, I know
        exactly what I’m ordering and I’m not as tempted to make bad choices.</li>
      <li>Make the most of the 400 to 600 calories you get each day for your meal. Don’t spoil it on something that’s unhealthy.
        I just discovered vinegar on salads instead of high-calorie dressings—think of all the calories I could have saved
        along the way!</li>
    </ul>
    <h3>April’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla</li>
      <li>IsaDelight®</li>
      <li>Cleanse For Life®</li>
    </ul>`;
  }

  private getBillAndKellerBSuccessStory(): string {
    return `<h3>Mom’s Transformation Inspires Father-Son Duo to Aim For Leaner Physiques</h3>
    <p>
      Bill and Keller knew that Isagenix® worked. After all, the father and son duo from Washington had watched their wife and
      mom Shelley conquer her own weight struggles during the 2008 IsaBody Challenge®. Shelley not only gained a lean body
      and toned physique, but she also took home first place in her age category.
    </p>
    <p>
      But the pair didn’t take it to heart until they started examining their own goals. Dad Bill had noticed that his health wasn’t
      what it used to be since turning 40 and knew he needed to drop a few pounds. Nineteen-year-old Keller was a standout
      athlete in high school, but had never achieved the "beach body" he’d always dreamed of.
    </p>
    <p>
      Armed with their goals and knowing what was possible with Isagenix, Bill and Keller committed to the 2009 IsaBody Challenge
      in the group category to spend more time together and not only achieved the results they hoped for, but won $5,000
      as the category’s first-place finishers.
    </p>
    <p>
      Their plan was a relatively simple one that included rigorous physical workouts, healthy eating and, of course, Isagenix
      products.
    </p>
    <p>
      "We made sure we stuck strictly to our program," explains Bill. "We did all of the products and had regular Cleanse Days.
      We also kept each other accountable and made sure the other person was eating right and lifting three days a week
      and running three days a week."
    </p>
    <p>
      As the contest neared its conclusion, Bill and Keller began to see the benefits of their hard work. Bill’s weight dropped
      during the contest from 217 pounds to 189 pounds,* while his body fat plummeted from 24 percent to 12 percent.* Keller
      cut his weight from 207 pounds to 187 pounds* and his body fat also dropped from 22 percent to a remarkable five
      percent.*
    </p>
    <p>
      Bill says that the results were exactly what he was hoping for when he made the decision to dedicate himself to becoming
      healthier.
    </p>
    <p>
      "I wanted to get rid of some of the extra weight I carried around in my midsection and see if that would help me not be so
      sore after a lot of my physical activities like soccer, fishing and coaching," explains Bill. "Isagenix has been
      stellar because you’re taking care of yourself and conscious of what you’re doing to your body. I feel like I’ve
      added 10 or 15 years to my life."
    </p>
    <p>
      Bill believes that the guidelines and accountability that the contest provided were key to the success he experienced and
      says that anyone with the will to change their life can do so with the help of the IsaBody Challenge and Isagenix
      products.
    </p>
    <p>
      "It’s all about discipline and the willpower most people lack," shares Bill. "The Challenge makes you more aware and accountable
      of your actions because you’ve made the commitment to do it."
    </p>
    <p>
      Keller says that based on the physical changes he’s seen and also experienced first-hand, he believes the effects of the
      contest speak for themselves.
    </p>
    <p>
      "If someone were to ask me why they should do the Challenge, I’d just show them all of the ‘before’ and ‘after’ pictures,"
      says Keller. "For me, just seeing the transformation in a relatively short amount of time is really motivating. That
      pushed me toward the decision to change my life and become even healthier."
    </p>
    <p>
      With their health and physical fitness better than ever, Bill and Keller say that they’re now focused on maintaining that
      level of well-being and also spreading the word about Isagenix to those who might be looking for results similar
      to what they’ve experienced.
    </p>
    <p>
      "Without a doubt, we plan on continuing to use the products," shares Bill. "For me and Keller, our responsibility is to go
      out and share what the products have done for us – if not, we’d be cheating somebody else out of the opportunity
      to feel the way we feel."
    </p>
    <h3>Bill and Keller’s Tips For Success</h3>
    <ul>
      <li>Create a plan and stick with it. Aim for an exercise routine that combines cardio several times a week along with
        regular strength training sessions.</li>
      <li>Keep track of your weight-loss progress and daily activities in a journal. It’ll serve as extra motivation and keep
        you accountable.</li>
      <li>Commit to doing the IsaBody Challenge® with a family member or friend to spend time with the person and get healthy
        together.</li>
    </ul>
    <h3>Bill and Keller’s Favorite Products</h3>
    <ul>
      <li>Isagenix Greens!™</li>
      <li>IsaLean® Shakes</li>
      <li>Cleanse for Life®</li>
      <li>Ionix® Supreme</li>
      <li>IsaFruits®</li>
    </ul>`;
  }

  private getChristinaKSuccessStory(): string {
    return `<h3>Physical Therapist Overcomes "Morbidly Obese" Label and Transforms Figure</h3>
    <p>
      During a routine screening for life insurance, Christina was devastated to discover that at 287 pounds she was considered
      morbidly obese and an expensive liability to the company and her family.
    </p>
    <p>
      Although she knew better as a physical therapist, Christina hadn’t been successful in finding a solution to pare down her
      weight while also being manageable amidst her busy schedule as a working mom.
    </p>
    <p>
      "I was feeling desperate, scared and overwhelmed," shares Christina of North Carolina. "Going through the process of losing
      weight is hard work and I didn’t see how I could fit it all in."
    </p>
    <p>
      Physically, Christina’s joints hurt and her feet and ankles were swollen every day from carrying around the extra weight.
      She had trouble sleeping and found it difficult to do her job as a pediatric physical therapist where many sessions
      included crawling on the floor to assist the children she was rehabilitating.
    </p>
    <p>
      The fear of not being around for her family had become a dark shadow in her life and she knew she needed to take control.
      After researching Isagenix® and thinking about it for several months, Christina finally decided to give the products
      a shot. Within her first few months, she lost 20 pounds and 35 inches* and decided to take the leap and sign up for
      the 2009 IsaBody Challenge® to stay focused.
    </p>
    <p>
      "I started exercising again and the first three months was really just gritting my teeth and convincing myself that I wanted
      to do this," says Christina. "Knowing that there was a possibility of winning a prize for my success helped me stay
      motivated on the days I wanted to give up."
    </p>
    <p>
      Her exercise regimen began with walking for half of a mile, which often took her about 30 minutes. By the end, she’d feel
      exhausted, yet accomplished. Soon, she was able to walk a mile in 30 minutes, then two miles. Now the second-place
      winner in the Women 36-49 Category of the 2009 Challenge is even running and lifting weights to tone and strengthen
      her body.
    </p>
    <p>
      Her schedule as a busy mom no longer gets in the way of her fitness routine, thanks to the energy and rest she’s finally
      getting since fueling her body with Isagenix. Whether it’s getting up early and walking while her husband watches
      the kids or doing an exercise video when she first wakes up, Christina is proud she’s finally made her health a priority.
      Both her son and daughter are overjoyed over their mother’s achievement of losing 85 pounds* and love that she can
      kayak and skateboard with them. Her son even commented that he can finally put his arms around her and give her a
      proper hug.
    </p>
    <p>
      Formerly hooked on cappuccinos, Christina has now learned to splurge on a cup of the nonfat, decaffeinated versions instead
      and enjoys taking her 4-year-old daughter to the local coffeehouse to connect with her as her new "celebration."
    </p>
    <p>
      "I haven’t had to really give anything up and that’s the nice thing about Isagenix," shares Christina. "I’m choosing what
      I want and don’t want and that’s empowering."
    </p>
    <h3>Christina’s Tips For Weight-Loss & Health Success</h3>
    <ul>
      <li>Make the 30-Day System work for you. While I have a hard time completing two Cleanse Days in a row, I can accomplish
        a day-and-a-half of cleansing. That’s much better than not doing it at all.</li>
      <li>If you have a lot of weight to lose, make sure to add extra protein to your diet. I include IsaPro® in my IsaLean®
        Shakes to curb my appetite.</li>
      <li>Visit IsagenixPodcast.com and your Back Office. I learned all about the products and their benefits by listening
        to the podcasts.</li>
      <li>If you’re a woman, you need to add IsaCalcium® to your routine to contribute to your bone strength. I take it before
        bed.</li>
      <li>Just do it and commit to a plan. While you can go to the gym and have a personal trainer, you can also accomplish
        your goals by listening to the conference calls and finding a walking buddy.</li>
    </ul>
    <h3>Christina’s Favorite Products</h3>
    <ul>
      <li>IsaOmega Supreme®</li>
      <li>IsaFruits®</li>
      <li>IsaCalcium®</li>
    </ul>`;
  }

  private getDonovanMSuccessStory(): string {
    return `<h3>Sky’s No Longer the Limit For 100-Pound Club Member</h3>
    <p>
      Overweight his entire life, Donovan tried not to let it get in the way of living life to the fullest. Still, keeping up with
      his friends on the tennis court or even his adventurous mother was a struggle for the 36-year-old whose weight at
      one point reached nearly 400 pounds. After trying almost every diet program on the market with little success, Donovan
      began to resign himself to the fact that he would always be overweight. The worst part, however, was that he knew
      that if he didn’t drop the weight, he would never be able to cross off the No. 1 thing on his bucket list: Skydiving.
    </p>
    <p>
      "I never came to terms with that because it was something I had always wanted to do," shares Donovan. "But because I was
      over the 240-pound weight limit, I wasn’t allowed to jump. I was starting to give up on so many things in life and
      skydiving was just one of them."
    </p>
    <p>
      Despite his dwindling hope, Donovan still dreamed of losing the weight so he could one day make the jump. Around that time,
      while having lunch with a friend, he learned about Isagenix®. Just one day later, after talking with his friend’s
      sponsor and learning more about Isagenix, Donovan was ready to take a leap of faith.
    </p>
    <p>
      "What did I have to lose," shares Donovan. "The price was reasonable and there was a money-back guarantee, so I decided to
      give it a try. It scares me to think of if I’d said no; I’d still weigh around 400 pounds."
    </p>
    <p>
      Not long after joining Isagenix, Donovan learned about the 2008 IsaBody Challenge®. Competitive by nature, he signed up for
      the Challenge not only for the chance to win the $10,000 grand prize, but also to stay motivated if the going got
      tough. Using the Cleansing and Fat Burning System: 30-day and 9-day supply throughout the Challenge, he committed
      himself to the program and surrounded himself with a team of friends, family and two coaches. As the weight came
      off and he hit personal milestones, he sent e-mails to everyone he knew updating them on his progress. This not only
      kept those around him in the loop on his progress and goals, but the kudos he received spurred him forward to reach
      even higher goals.
    </p>
    <p>
      Donovan’s impressive weight-loss of 53 pounds* secured his spot as a finalist in the 2008 Challenge and he became a member
      of the 100-Pound Club — but he didn’t stop there. He just couldn’t. His weight still hovering around 285 pounds,
      he knew he was still about 45 pounds too heavy to jump out of an airplane. He decided to sign up for the 2009 IsaBody
      Challenge and was even more determined than ever to win the top prize and finally fulfill his skydiving dream.
    </p>
    <p>
      During the 2009 Challenge Donovan dropped another 45 pounds* and took home first place in the Men’s 18-35 Category. With
      a weight of about 232 pounds, he’s still going strong and striving for his ultimate weight goal of 225 pounds with
      only 10 percent body fat. As for his other goal, Donovan turned that dream into a reality shortly after finishing
      the 2009 Challenge.
    </p>
    <p>
      "Standing in the open door of the plane was a dream come true — almost unreal," he shares. "I’d worked so hard to move my
      numbers down below the limit and I could barely believe that it was happening. Afterward, I was so pumped — it was
      everything I’d hoped it would be — and I immediately started thinking about all the other adventures that would now
      be available to me."
    </p>
    <p>
      With his life and health back on track, Donovan is now excited and passionate about sharing his story with others: "I’m a
      walking billboard! People are coming up to me all the time and asking me what I did!"
    </p>
    <p>
      As for his new adventure? Donovan is dating.
    </p>
    <p>
      "I now have the confidence to approach a woman and talk to her," he says. "Before Isagenix, that never would have happened."
    </p>
    <h3>Donovan’s Tips For Weight-Loss and Health Success:</h3>
    <ul>
      <li>Have a free day and go out to a restaurant once a week.</li>
      <li>Cut yourself a break — nobody is perfect so don’t expect yourself to be perfect. The systems are very forgiving.</li>
      <li>Remember, if you fall off the wagon, just let it go and move on.</li>
    </ul>
    <h3>Donovan’s Favorite Products</h3>
    <ul>
      <li>Cleanse for Life®</li>
      <li>IsaLean® Shakes</li>
      <li>Ionix® Supreme</li>
      <li>IsaOmega Supreme®</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getDrKenSSuccessStory(): string {
    return `<h3>IsaBody Challenge® Taps Into Chiropractor’s Competitive Side</h3>
    <p>
      Maintaining a healthy weight has been a lifelong battle for Dr. Ken. As a fourth grader, he tipped the scales at 160 pounds.
      To make the cut in school sports, he would diet and exercise vigorously, make weight but the end result was always
      the same: After the season was over, he’d gain the weight right back and then some.
    </p>
    <p>
      Fast forward two decades later and the 45-year-old chiropractor from Oregon says little had changed.
    </p>
    <p>
      "I wasn’t any different than many Americans out there who struggle with their weight," admits Dr. Ken. "I would live for
      the event and go on a restrictive diet for whatever was coming up that I needed to look good for, but never make
      a lifestyle change."
    </p>
    <p>
      Little did he know that his friend, who had been consistently calling him for months about Nutritional Cleansing, would hold
      the answer he’d been searching for — Isagenix®. He just had to take the next step and accept the offer.
    </p>
    <p>
      At 295 pounds, Dr. Ken struggled to breathe as he reached down to tie his tennis shoes and adjusting his patients’ backs
      and necks was becoming increasingly difficult. A "junk food junkie," soda and fast food were staples of his daily
      regimen and he often felt embarrassed and hypocritical as he shared the importance of proper nutrition and exercise
      with patients who visited his practice.
    </p>
    <p>
      He knew he needed to make a change, but was frustrated because he couldn’t seem to find a healthy solution to his problem.
      Then his friend phoned again. This time when he told Dr. Ken about Isagenix, he also shared information about the
      2009 IsaBody Challenge® with him and encouraged him to join for extra motivation.
    </p>
    <p>
      That did it. Dr. Ken, who is also a college professor of anatomy and physiology, signed up for Isagenix and the Challenge
      that day, "determined to prove it right or wrong."
    </p>
    <p>
      As he did his regular Cleanse Days and drank his IsaLean® Shakes, the pounds began to come off and his patients noticed.
      The compliments only fueled his confidence and excitement. It wasn’t long before Dr. Ken began seeing the world through
      different eyes. Suddenly the walking path near his home was no longer just a nice place for his family to visit,
      but his route to a new body. He began walking with his mother and mother-in-law on the sidewalks that crisscrossed
      the park for 45 minutes at lunch and then set his sights on conquering a large hill that seemed to have an endless
      ascent.
    </p>
    <p>
      He "hooped and hollered" when his weight dipped under the 200-pound mark and before long, his walking routine turned into
      a running routine. Now the once yo-yo dieter is proud to have maintained his results, reducing his pants size from
      a tight 44 to a loose 36,* trading his 3XL shirts for XL* ones and becoming 101 pounds lighter.* Named the Grand
      Prize Winner and first-place winner in the Men 36-49 Category of the 2009 IsaBody Challenge, Dr. Ken says the award
      is simply the icing on the cake.
    </p>
    <p>
      Many patients who haven’t seen him in a while are often in shock when the toned runner walks through the door. The normal
      reaction? They immediately want to know what he is doing. Because of the health and weight-loss success he’s experienced,
      Dr. Ken is now sharing Isagenix with his patients. By inviting them to try the products, he’s not only improving
      lives, but he has already earned several thousand dollars in residual income** that he’s saving to give his family
      a much-deserved vacation.
    </p>
    <p>
      But perhaps Dr. Ken’s favorite part of transforming his health and improving his fitness is his renewed energy. He’s now
      off the sidelines and doing activities with his family that used to exhaust him. At his heaviest, he couldn’t jump
      on the trampoline in the backyard because he exceeded the weight limitations and he used to have to skip bike rides
      in the park because it was too much for him to handle. Now he spends hours playing with his children and even jumping
      on the trampoline with them.
    </p>
    <p>
      "I’m out playing with them and doing the activities they enjoy without getting tired now," says Dr. Ken. "To me, there is
      no greater joy in the world and I’m so proud of how supportive my whole family has been."
    </p>
    <p>
      As for the never-ending hill in his neighborhood park? Dr. Ken has not only conquered it; he now cranks through two-mile
      runs before racing up the hill and then continuing on with his daily run.
    </p>
    <p>
      "That’s just one thing I wouldn’t have been able to do before Isagenix," shares Dr. Ken. "I still do a double-take when I
      look in the mirror because what I’ve accomplished still just seems so surreal."
    </p>
    <h3>Dr. Ken’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Enter the IsaBody Challenge®. Everyone deserves the opportunity to improve their health and wellness and it’s a great
        way to stick to your goals and stay motivated.</li>
      <li>Commit to putting Isagenix® products in your body every day and follow one of the systems consistently.</li>
      <li>Never give up on your health goals no matter how long it takes for you to get there.</li>
      <li>Find a support system by asking a family member or friend to keep you accountable for your goals.</li>
      <li>Create an exercise program that works for you and stick with it, always striving to be a little stronger or a little
        faster than the last time.</li>
    </ul>
    <h3>Dr. Ken’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake with a scoop of IsaCalcium® or IsaFruits®</li>
      <li>Ionix® Supreme</li>
      <li>IsaDelight®</li>
      <li>IsaOmega Supreme®</li>
      <li>IsaLean® Bars</li>
    </ul>`;
  }

  private getDrToddGSuccessStory(): string {
    return `<h3>Isagenix® Gives Chiropractor a Much-Needed Adjustment</h3>
    <p>
      Before discovering Isagenix®, Dr. Todd was feeling both physically and emotionally frustrated while caring for his patients.
      He enjoyed treating his patients, but when it came time to telling them that they needed to do something about their
      weight to relieve their back pain, he was conflicted. How could he tell them to lose weight when he was overweight
      and unwilling to do anything about his own problem? Coupled with a family history riddled with health challenges,
      Dr. Todd was concerned about his own future as a family man.
    </p>
    <p>
      But, since discovering Isagenix®, all of that has changed, and the 53-year-old is now enjoying a better quality of life not
      only for himself, but for his patients as well. A whopping 70 pounds lighter,* nearly eight pants sizes smaller*
      and second-place winner in the Men 50+ Category of the 2009 IsaBody Challenge®, the California chiropractor is back
      to participating in his favorite sports and even climbing mountains.
    </p>
    <p>
      "Isagenix has totally changed my life for the better," shares Dr. Todd. "I was noticing results in the very first week and
      now I’m doing things that I would not have even imagined were possible."
    </p>
    <p>
      Before being introduced to Isagenix, Dr. Todd knew he had two strikes against him – he was overweight and had tried and frequently
      failed at previous weight-loss attempts—but it wasn’t until his beloved mother passed away of a stroke that he realized
      he desperately needed to do something about his lifestyle.
    </p>
    <p>
      "As I started to write my mother’s obituary I wondered what my own obituary would look like if anything were to happen to
      me," recalls Dr. Todd. "There I sat, age 53, overweight, unhealthy and a real walking time bomb. Needless to say,
      I was contemplating making some serious changes for myself."
    </p>
    <p>
      Watching home video footage from the time family spent together following his mother’s memorial service drove home his desire
      to change as he watched his overweight self playing with his six-month-old grandson. Reflecting on the premature
      loss of his father, he knew he had to do everything possible to get his health on track so he’d be around long enough
      to see the boy grow up.
    </p>
    <p>
      The timing couldn’t have been better. After attending an Isagenix meeting in January hosted by a colleague, Dr. Todd signed
      up for the 2009 IsaBody Challenge. Inspired by the "before" and "after" pictures and testimonials of previous participants
      along with learning more about how unique Nutritional Cleansing was compared to other weight-loss programs, he decided
      to go for it.
    </p>
    <p>
      He reached his first significant milestone after he lost 40 pounds.* Before long, the guy who avoided gyms and running found
      himself exercising with ankle and wrist weights, taking daily walks around the neighborhood and playing tennis with
      his son. Just after this past 4th of July, he hiked up one of the southernmost active volcanoes, Mt. Lassen, located
      in the Cascade Range of Northern California.
    </p>
    <p>
      Dr. Todd has since lost an additional 30 pounds* and loves hearing his patients tell him that he’s "not fat anymore." This
      transformation now has Dr. Todd incorporating Isagenix into his practice with one-on-one consultations on how chiropractic
      care and Nutritional Cleansing with Isagenix complement one another. He and his colleague also schedule bi-monthly
      group meetings to answer questions, sign up new Associates, and offer samples of the IsaLean® Shakes.
    </p>
    <p>
      With all of the weight loss, Todd has experienced greater energy, sleeps better and feels more alert than he has in years.
    </p>
    <p>
      "I’m healthier, feeling absolutely fantastic and looking better than ever," shares Dr. Todd. "That’s the best prize anyone
      could ask for."
    </p>
    <h3>Dr. Todd’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Be serious about your commitment and don’t cheat.</li>
      <li>Pray every single morning for spiritual guidance.</li>
      <li>Post your "before” pictures (and your goals) on the refrigerator.</li>
      <li>Have your sponsor, spouse, etc., monitor your progress.</li>
    </ul>
    <h3>Dr. Todd’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Natural Creamy Chocolate</li>
      <li>Ionix® Supreme</li>
      <li>Natural Accelerator™</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJanaBSuccessStory(): string {
    return `<h3>Corporate Trainer Trades Apathy for Action</h3>
    <p>
      Jana wore a great game face at her job as vice president and director of training for an Albuquerque bank. Every day she
      would motivate others to take action, but behind the mask, she had given up on her own health and fitness.
    </p>
    <p>
      Jana had resigned herself to living her life as a 253-pound person suffering from constant back and joint pain. The burden
      of carrying extra weight forced her to give up a once active lifestyle, which included participating in an annual
      breast cancer walk in memory of her mother. Fed up with the situation, but unsure of how to regain control, the self-proclaimed
      "sugar-holic" began packing on the pounds from poor eating habits and an apathetic spirit.
    </p>
    <p>
      Ironically, it was when she was attending a business conference and not focusing on her weight that the solution to her problem
      appeared. Drawn to a vibrant personal empowerment coach who was the event’s keynote speaker, Jana signed up for her
      regular e-mails and decided to even attend a few of her local meetings. It was at these meetings that Jana realized
      that she needed to make a change and the coach introduced her to Isagenix®.
    </p>
    <p>
      Soon after losing 30 pounds* with Isagenix she decided to sign up for the 2009 IsaBody Challenge® to keep her momentum going.
      Realizing her weight problems stemmed from poor nutrition, Jana now lives for her IsaLean® Shakes and organizes salad
      potlucks with her colleagues at the office. Her weight loss even boosted her confidence to aim for certification
      as a Jazzercise instructor, a feat she previously wasn’t able to accomplish due to her size.
    </p>
    <p>
      The second-place winner in the Women’s 50+ Category lost a total of 40 pounds* during the 2009 Challenge and says she no
      longer craves sugar the way she used to.
    </p>
    <p>
      With her new body, the 54-year old has stepped up her Jazzercise workouts and is feeling more energetic than ever. Rather
      than walking to raise money for breast cancer research, she’s now participating in 5k running events to honor her
      mother’s memory. While undergoing her transformation, Jana says she’s learned to let go of the negative mentality
      that held her back for so long.
    </p>
    <p>
      "I never thought I’d have a good body and I can’t believe I’m wearing a jeans size that I haven’t been in since college,"
      explains Jana. "I now see my body as an asset instead of a liability."
    </p>
    <p>
      With her body and spirit rejuvenated, Jana is inspiring others to take action and is hoping to coach some of her co-workers
      through the 2010 IsaBody Challenge.
    </p>
    <p>
      "The way I view the world is so different now," says Jana. "I’m glad I kept my mind open and I’m so proud to be inspiring
      and helping others achieve great results the way that I have."
    </p>
    <h3>Jana’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>The 30-Day and 9-Day systems work, so stay true to them. Aim to do a full Cleanse Day once a week.</li>
      <li>Create a support network and get everyone and anyone involved in your health goals.</li>
      <li>Map out an exercise plan and make sure it includes aerobic activity and strength training.</li>
      <li>Drink lots of purified water!</li>
    </ul>
    <h3>Jana’s Favorite Products</h3>
    <ul>
      <li>Cleanse for Life®</li>
      <li>IsaDelight®</li>
      <li>IsaFruits®</li>
      <li>Want More Energy?® Sticks</li>
    </ul>`;
  }

  private getJasonVSuccessStory(): string {
    return `<h3>20-Something Reenergizes Body and Gets Back on Bike</h3>
    <p>
      For years, Jason felt like a 20-something trapped in a 70-year-old’s body. His struggle with constant pain not only left
      him reaching for pills to dull the searing aches, but also sacrifice his once active lifestyle, which included rollerblading,
      biking and wakeboarding.
    </p>
    <p>
      "From that point on, life got pretty boring for me," admits Jason of Quebec. "I mean, the doctors pretty much told me that
      there was nothing else they could do for me."
    </p>
    <p>
      The new, sedentary lifestyle did more than just create monotonous days for Jason though; it also contributed to a hefty weight
      gain. It wasn’t until his wife mentioned that he seemed to be getting a little pudgy that he realized he needed to
      do something.
    </p>
    <p>
      Lucky for him, it was only days later that his mom’s friend happened to mention Isagenix® as a way to trim down while also
      bolstering his health with natural products.
    </p>
    <p>
      Skeptical at first of whether Isagenix would actually work or help his body feel any better, Jason figured he’d give the
      products a try. To take it to another level and make sure he’d stay committed, he also decided to join the 2009 IsaBody
      Challenge®.
    </p>
    <p>
      Through sticking to regular Cleanse Days, the 30-Day Cleansing and Fat Burning System and cutting back on empty calories,
      Jason began to watch the pounds come off. He also noticed that his body began to feel refreshed and reenergized.
      Soon, he had lost 60 pounds* and "little things" like walking up a flight of stairs became a much different experience.
    </p>
    <p>
      "It’s such a simple thing, but when you are overweight and you walk up a flight of stairs, you’re out of breath and you want
      to hide from people because you can’t speak," recalls Jason. "But when you’ve lost 60 pounds, you walk up that same
      flight and it’s no big deal."
    </p>
    <p>
      Named the third-place winner in the Men 18-35 Category of the 2009 Challenge, Jason says he’s most proud of the fact that
      he’s back to wakeboarding and some of the activities he once had to relinquish to cope with his health difficulties.
    </p>
    <p>
      "Isagenix has made an enormous difference on my health," shares Jason. "It also doesn’t hurt that I lost the weight either—my
      wife thinks I’m sexier now."
    </p>
    <p>
      Jason says he plans to keep using Isagenix and nourishing his body with the pure nutrition he gets from the products and
      hopes to continue limiting his intake of synthetic, artificial foods. He’s working toward reaching his ultimate goal
      of being 185 pounds and maintaining his weight at that figure with Isagenix.
    </p>
    <p>
      "I’m just so happy to be riding my bike and wakeboarding again," says Jason. "I feel like I’m finally getting my life back
      and I’m going to live it to the fullest."
    </p>
    <h3>Jason’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Really watch your portions and calories if you are unable to exercise and follow the 30-Day System as closely as
        possible.</li>
      <li>Reduce your intake of synthetic and artificial foods to give your body the best nutrition.</li>
      <li>Remember to stop and think about some of the "little things" that are changing if your weight-loss slows down.</li>
      <li>The choices you make today will affect what your health looks like decades down the road. Reflect on that when you’re
        having a challenging day and contemplating whether to stick to the system or not.</li>
    </ul>
    <h3>Jason’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Natural Creamy Chocolate</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJeffMSuccessStory(): string {
    return `<h3>Father of Two Loses 90 Pounds* and Rejoins Family Activities</h3>
    <p>
      Jeff is a father of two, but for quite some time, he was missing out on his children’s lives. At 365 pounds, venturing outside
      with them to play was too difficult, joining them on amusement park rides was out of the question and keeping up
      with them while shopping was too much of a chore.
    </p>
    <p>
      But what clinched the fact that he needed to change was when he suffered the humiliation of having to request a seat belt
      extender on a flight out of town for work. Fortunately, he didn’t have to look far for the answer to his problem.
    </p>
    <p>
      Shortly after the airplane incident, Jeff heard about a friend’s incredible success with Isagenix® and the 2009 IsaBody Challenge®
      and decided to do a little investigating before he tried it.
    </p>
    <p>
      "I had tried just about every diet out there, from the typical ones you hear about all the time to the exotic ones, but we
      hadn’t heard about Isagenix before," explains the 38-year-old from Arizona.
    </p>
    <p>
      Jeff and his wife became more intrigued with Isagenix when they began looking into the products’ nutritional information
      and realized that Isagenix wasn’t a diet — it nourished the body with healthy ingredients. Their discovery solidified
      their belief that they’d found the right products and the pair decided to enter the Challenge together for "a little
      extra motivation."
    </p>
    <p>
      The couple quickly came up with a plan to get their daily exercise and Isagenix regimen rolling, scheduling one Cleanse Day
      a week along with 30 minutes of exercise each day on the elliptical machine.
    </p>
    <p>
      "As the weight started to come off, I realized that for once what I was doing was working. I knew I could ride it all the
      way down to my target weight of 225 pounds," Jeff says.
    </p>
    <p>
      He even went the extra step and gave up regular lunch outings with colleagues to fast food restaurants so he could truly
      commit to his new lifestyle.
    </p>
    <p>
      Named the third-place winner in the Men 36-49 Category of the 2009 Challenge, Jeff lost 90 pounds* and trimmed down five
      pant sizes.* He says he’s proud of the progress he’s made and is living life like never before.
    </p>
    <p>
      "I’m on track now to hit my goal and that’s incredible. Once you see that light at the end of the tunnel, it’s really exciting,"
      shares Jeff. "For me, I needed to change in environment and attitude – I needed something to hit me and tell me why
      I needed to lose weight."
    </p>
    <p>
      As satisfying as the weight loss has been for Jeff, he says that what he’ll always remember are the experiences he’s been
      able to have with his family now that he’s in better physical condition.
    </p>
    <p>
      "My relationship with my wife and kids is better now. My wife and I can go out and do fun stuff, be more social and get out
      of the house," explains Jeff. "I’m off of the couch now and actually playing with the kids, even taking them to the
      swimming pool and the park. We went to Disneyland and I was able to get on the rides with them, and realizing that
      they had always been having fun, but without me was really an ‘ah ha’ moment."
    </p>
    <p>
      As he continues to lose weight and work toward his goal, Jeff knows that he’ll never allow himself to return to his once
      unhealthy condition. His success with Isagenix products and the lessons he’s learned through the IsaBody Challenge
      have changed his life and he hopes that his own experience will inspire others to strive for similar results.
    </p>
    <p>
      "As soon as I hit that goal of 225 pounds, I’m going to maintain it and never go back," shares Jeff. " I’ve written several
      journal entries for myself about how it feels to be so heavy and why I’m doing what I’m doing – there’s simply no
      reason to go back."
    </p>
    <p>
      *The weight-loss testimonials presented apply only to the individuals depicted, cannot be guaranteed, and should not be considered
      typical. A 2008 university study showed a statistically significant weight loss of 3.2kg during the 9-Day Nutritional
      Cleansing Program.
    </p>
    <h3>Jeff’s Success Tips</h3>
    <ul>
      <li>Join the IsaBody Challenge™ with your spouse, significant other or friend for extra motivation. When you’re struggling
        on a Cleanse Day because everyone else is eating, you can rely on them for support because they’re doing the same
        thing.</li>
      <li>Write out your exercise and Nutritional Cleansing routine and stick to it.</li>
      <li>Try a variety of products. We do IsaLean® Shakes, IsaFruits®, Isagenix Greens!™ and IsaFlush® every day.</li>
      <li>Get outside and play with your kids for extra activity and bonding time with them. You’ll never get that time back.</li>
    </ul>
    <h3>Jeff’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>IsaFruits®</li>
      <li>Isagenix Greens!™</li>
      <li>IsaFlush®</li>
    </ul>`;
  }

  private getLeslieHSuccessStory(): string {
    return `<h3>Healthy Lifestyle With Isagenix® Helps Leslie Adopt New Lease on Life</h3>
    <p>
      "Carpe Diem" wasn’t exactly Leslie’s motto nine months ago. Before discovering Isagenix® and signing up for the 2009 IsaBody
      Challenge®, the 46-year-old from British Columbia was struggling with her weight, and her health was becoming a point
      of concern with her doctor. At 222 pounds, she had no desire to leave her house, she avoided her reflection at all
      costs and the only thing that made her feel good was eating chocolate.
    </p>
    <p>
      It wasn’t until her friend gave her a facial using IsaDermix® skincare products that Leslie took her first steps towards
      a healthy new life and ultimate freedom.
    </p>
    <p>
      "The facial was the best I had ever had," shares Leslie. "Then my friend told me that the same company that makes IsaDermix
      also makes a line of health and wellness products. I immediately went home and started researching Isagenix."
    </p>
    <p>
      Leslie was impressed with what she read and decided to give Isagenix a shot. For an extra dose of motivation, she signed
      up for the IsaBody Challenge.
    </p>
    <p>
      "I thought it was a fun way to approach a healthy lifestyle and I love winning," she says.
    </p>
    <p>
      It wasn’t long before Leslie started feeling better. Her energy level was up and she was getting a good night’s sleep — something
      that had escaped her for as long as she could remember. Then the pounds and inches began melting off. Leslie couldn’t
      believe her results.
    </p>
    <p>
      Sadly, less than one month into the Challenge, tragedy struck. Her beloved nephew was killed in a work-related accident and
      Leslie was devastated. Fortunately, she knew she wouldn’t be relying on her same old habits to cope with the pain.
    </p>
    <p>
      "When tragedy hits so close to home, you realize how precious every moment is and that the only way to get the most out of
      life is to lead a healthy lifestyle," she shares. "I became even more determined to win the Challenge, not only for
      myself, but for my great-nephew — his dad, my nephew, was always so determined and I wanted him to see what determination
      physically looks like."
    </p>
    <p>
      Even more committed to transforming her life than ever before, Leslie recruited friends for support and also as exercise
      companions. Soon, she was going out in public with her husband and having to borrow clothes from friends because
      nothing fit her shrinking frame, which was 57 pounds smaller.*
    </p>
    <p>
      "I remember we went to a party and people didn’t even recognize me," she says. "Soon, the word got out about my transformation
      and people were so surprised, I felt like a celebrity!"
    </p>
    <p>
      Still, through it all, it was her desire to keep her nephew’s memory alive for her great-nephew that fueled her weight loss.
      She kept a journal, which not only chronicled her experience, but her precious memories and stories about her nephew
      — something tangible that she could give to the little boy who would never know his father.
    </p>
    <p>
      "I wanted him to know that determination and focus can get you where you want to go in life," she shares. "Don’t let negativity
      get in the way of following through with your vision."
    </p>
    <p>
      The third-place winner in the Women 36-49 Category of the 2009 Challenge, Leslie says she’s developed new, healthy habits
      and a new attitude toward life.
    </p>
    <p>
      "I feel so good," she gushes. "I’m going to be fabulous at 50 — that’s my new motto: Fabulous at 50!"
    </p>
    <h3>Leslie’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Sign up for and stick to the IsaBody Challenge®— it’ll help you stay motivated.</li>
      <li>Get rid of any negativity. Don’t associate yourself with people who don’t believe in what you’re doing.</li>
      <li>Stay focused. If you flub up, don’t be so hard on yourself — just get right back up and keep going.</li>
    </ul>
    <h3>Leslie’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Want More Energy?®</li>
      <li>IsaDermix®</li>
    </ul>`;
  }

  private getMarkDSuccessStory(): string {
    return `<h3>Hobby Fisherman Gets Hooked on Isagenix® and Scales Back Weight</h3>
    <p>
      As the industrial fish scale registered the number "404," all Mark could do was stare incredulously, wondering how he had
      let himself get to that point. Hit hard by the figure, the hobby fisherman from California thought he was surely
      past the point of no return.
    </p>
    <p>
      A former runner who was very active in his younger years, Mark never thought of himself as particularly overweight. But after
      a severe car accident limited his mobility, the 53-year-old furniture refinisher’s health began to deteriorate as
      his weight climbed.
    </p>
    <p>
      It wasn’t until that fateful fishing trip, however, that he realized exactly how bad the situation had become. Unsure of
      where to start, Mark considered lap band surgery to lose the weight, but wasn’t thrilled with the idea of having
      excess skin left over. He considered putting himself on a diet, but he knew that temporarily dropping a few pounds
      wouldn’t make a significant difference.
    </p>
    <p>
      A routine doctor visit changed his life forever.
    </p>
    <p>
      "My doctor told me that he’d been using Isagenix® and suggested that I go to a meeting to learn more," Mark recalls. "Then
      at the meeting another doctor told me that this system was designed for me. I was skeptical at first, but I made
      a commitment to test it out and do it for six months by the book."
    </p>
    <p>
      Mark realized that exercise would be an important part of his recovery, so he began to walk around the local track. At first,
      he could only complete one lap, but then that soon turned into two, then three and more. Between nourishing his body
      with Isagenix products and getting regular exercise, he soon was down 62 pounds.*
    </p>
    <p>
      Then he decided to take his progress to the next level and join the 2009 IsaBody Challenge®. With his doctor monitoring him,
      he kept up his walking routine, started going to the gym and doing the Stairmaster and the weight continued to fall
      off. He even brought his IsaLean® Shakes along with him when he went on fishing trips with his friends. Soon, he’d
      hit his initial goal of making it to 250 pounds* so he reset it to 220 pounds instead.
    </p>
    <p>
      Now down 180 pounds,* the first-place winner in the Men 50+ Category of the 2009 Challenge and solidly on his way to being
      a member of the 200-Pound Club, Mark says the change in his physical appearance has been stunning, for both himself
      and his friends and family.
    </p>
    <p>
      "The compliments I get and the way I feel are amazing. Now that I’m down to a normal size 36,* people admit that they were
      always worried about me, but afraid to say anything," shares Mark. "For me, hearing that they’re thankful that I’m
      going to be around and in their lives longer has been very touching."
    </p>
    <p>
      Mark no longer worries about being able to slide into a booth at a restaurant or sit in a chair that has arms. He’s grateful
      to have had the opportunity to participate in the IsaBody Challenge because he says it’s provided him with the guidelines
      and motivation he needed to succeed. He’s even entering the 2010 Challenge to keep working towards his ultimate health
      and weight-loss goals.
    </p>
    <p>
      "Most people are goal-oriented and the IsaBody Challenge gives you something more to focus on and the motivation to achieve
      your goals," says Mark. "When I found out that I was a finalist, I broke down and started crying. When I went into
      the Challenge, I was doing it for myself and wasn’t interested in helping other people or making money; it was just
      about me. Now there’s so much more to it."
    </p>
    <p>
      With his newfound health and a desire to help others, Mark says that all the pieces of his life are finally coming together
      — and he credits Isagenix for that.
    </p>
    <p>
      "I’m actually in shape, happy and financially successful. I’ve had some of those things before, but never all at the same
      time," says Mark. "And now that I’m starting my Isagenix business and helping people, it’s all-encompassing. I know
      that I’ll never go back to what my life was before Isagenix."
    </p>
    <h3>Mark’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Join the 2010 IsaBody Challenge® for extra motivation. By keeping track of your weight and measurements, you’ll have
        an extra level of accountability.</li>
      <li>Call members of your upline for support and advice. There are plenty of Associates out there who want to come alongside
        you and help you in your quest to better health.</li>
      <li>Trust the products and follow the systems that have been created.</li>
      <li>Add IsaPro® to your IsaLean® Shake for extra protein if you hit a weight-loss plateau or you’re feeling super hungry
        all the time.</li>
    </ul>
    <h3>Mark’s Favorite Products</h3>
    <ul>
      <li>IsaPro®</li>
      <li>IsaDelight®</li>
      <li>IsaLean® Shakes</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getMelisaSSuccessStory(): string {
    return `<h3>Aspiring Interior Designer Remodels Outward Appearance with Isagenix®</h3>
    <p>
      Melisa’s physical appearance seemed to be a constant barrier keeping her from achieving success in her life. At 358 pounds,
      her professors discouraged her from becoming an interior designer because of negative perceptions in the industry.
    </p>
    <p>
      Still, Melisa was determined to prove them wrong. After she graduated, she attended job interview after job interview, with
      no luck. She was told that her design work was amazing, and was even called back for second and third interviews,
      yet she never received a job offer. One interviewer even explained that he would love to hire her, but appearance-wise,
      she wasn’t physically what the client would expect.
    </p>
    <p>
      "I was feeling extremely demoralized," shares 32-year-old Melisa. "They would say, ‘If you can’t put yourself together, how
      are you going to put together a home or office?’"
    </p>
    <p>
      Melisa became depressed and isolated herself from the world. She rarely left her bed and eventually, her friends disappeared
      and her family felt lost not knowing what to do to help her. Then her health took a turn. At just 32, Melisa experienced
      chest pains and her concerned doctor sent her to the emergency room to get the symptoms checked out.
    </p>
    <p>
      "I had never been more scared in my life," shares Melisa. "I couldn’t believe I had let myself get to that point."
    </p>
    <p>
      That was it. Finally ready to change her life around, Melisa heard about Isagenix® from a friend and started the 30-Day Cleansing
      and Fat Burning System. It didn’t take long before her body began to feel a difference. She was sleeping better and
      the weight had begun melting off.
    </p>
    <p>
      If timing is everything, then Melisa was exactly where she needed to be. Shortly after starting Isagenix, she met 5-Star
      Golden Circle and Nutritionist Jim R. who encouraged her to participate in the 2009 IsaBody Challenge® for extra
      motivation.
    </p>
    <p>
      "I was hesitant at first because when you weigh as much as I did, you don’t think you can do it," says Melisa. "I started
      working out 20 minutes a day and now I can work out for two hours at a time. Every day it became easier to go to
      the gym and then it even became fun."
    </p>
    <p>
      Melisa also started tracking all of the milestone moments that happened along the way, including being able to finally put
      on her own socks.
    </p>
    <p>
      "At 350 pounds, you can’t reach your feet," explains Melisa. "That was one of the first things I could do after starting
      Isagenix and I don’t want to forget that feeling, that small victory, because it keeps me going forward."
    </p>
    <p>
      Melisa can now bike 10 miles a day and she’s even coaching a soccer team. One of her biggest accomplishments was mountain
      climbing near Lake Powell, something she couldn’t and wouldn’t have even tried before Isagenix.
    </p>
    <p>
      Another dream turned reality? A fashionista at heart, now that Melisa is seven dress sizes smaller,* she’s finally able to
      wear the latest trends because she can find them in her size.
    </p>
    <p>
      "I was a size 34, now I’m a 20," she gushes. "It was such an emotional moment when I was able to go shopping for the first
      time. Initially, I picked out the biggest size that was available on the rack and it was too big! I started sobbing
      in the dressing room — that was quite a moment for me. Now I can go into any store at the mall and buy clothes."
    </p>
    <p>
      As for her skeptics, Melisa started her own interior design company with her father and is now proving everyone who doubted
      her wrong.
    </p>
    <p>
      "No one would give me a chance so I gave myself one," she explains. "Isagenix gave me the energy and confidence to do this.
      I’m working on multiple design projects and I can now put in long days because I feel so great."
    </p>
    <h3>Melisa’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Celebrate the small milestones and don’t dwell on the minor setbacks.</li>
      <li>Be realistic with your goals — you can’t compare yourself to other people.</li>
      <li>It’s important to be honest with yourself and your expectations.</li>
    </ul>
    <h3>Melisa’s Favorite Products</h3>
    <ul>
      <li>IsaDelights®</li>
      <li>Want More Energy?®</li>
      <li>IsaCalcium®</li>
      <li>IsaPro®</li>
    </ul>`;
  }

  private getMikeHSuccessStory(): string {
    return `<h3>Average Joe Accomplishes Above and Beyond Results With Isagenix®</h3>
    <p>
      Mike is the "every man" – a self-proclaimed "average guy" who worked hard, lost focus on his fitness and ended up overweight.
    </p>
    <p>
      Peaking at 256 pounds in 2006, Mike went to a Father’s Day gathering with his siblings and came to the realization that several
      of his family members were not only overweight, but were suffering from many health problems related to their unhealthy
      lifestyles. Mike knew he didn’t want to go down that road, so he decided to begin working out and trying to get himself
      back in shape. It was around that time that he first heard about Isagenix®.
    </p>
    <p>
      Despite experiencing weight-loss and health success with the products, after undergoing hernia surgery, he lost his motivation
      to keep going and stopped using the products. It wasn’t until he received a frightening phone call in late 2008 that
      he decided to reprioritize his health again.
    </p>
    <p>
      "I find out that a friend of mine from high school died of a brain tumor at 50 years old," Mike recalls. "At that point I
      realized that I can’t give anybody or anything the chance to make me unhealthy. So I decided to do the IsaBody Challenge®
      and get my health back on track."
    </p>
    <p>
      To experience the results he was looking for, Mike went all-in. He scheduled two Cleanse Days a week, chronicled his food
      intake to keep track of exactly what was entering his body and weighed himself every day to get an accurate measurement
      of how much weight he was losing each week and month. Eating healthy, lean protein and organic produce rounded out
      his regimen. By the completion of the contest, Mike had lost 51 pounds and 20 percent body fat.*
    </p>
    <p>
      "I weighed in at 175 today and I don’t think I look like I’m going-on-51 anymore," Mike says. "My wife loves it because she’s
      got a healthy husband again."
    </p>
    <p>
      Mike plans to kick start his Isagenix business by spreading the word about his own incredible results. And, as the third-place
      winner in the Men 50+ Category of the 2009 Challenge, he has the perfect platform to do it.
    </p>
    <p>
      "I’m a pretty confident guy, so I felt in my heart that I was going to get the call that I was a finalist, but when I got
      it, I was surprised," shares Mike. "I’m the guy who’s gained 30, 40, 50 pounds and got away with it for most of my
      life. Now things are back in order and I’m ready to help other ‘average Joes’ do the same."
    </p>
    <p>
      Mike says that the format of the Challenge helped guide him to success in his quest to regain his health, and now that the
      2010 Challenge is open for people to sign up year-round, he says that he’s already recommended it to several people.
    </p>
    <p>
      "When someone tells me they want to try the products, I tell them I need at least a 90-day commitment. If you commit to 90
      days, I will commit to coaching you and make you successful," explains Mike. "The Challenge is like a 24-week piece
      of paper where you’re writing everything down and it’s a powerful tool for accomplishing your ultimate goals."
    </p>
    <p>
      Now that his body shows the tangible results that people can achieve using Isagenix products, he has no intention of going
      back to where he once was.
    </p>
    <p>
      "These are the most wonderful products on the earth," says Mike. "I have dropped over 80 pounds* now and I’m totally committed
      to keeping it all off. I will use Isagenix products for the rest of my life."
    </p>
    <h3>Mike’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Commit to using Isagenix® products and sticking to the systems for at least 90 days to form a habit.</li>
      <li>Keep track of your daily progress so you can stay motivated.</li>
      <li>Share the 2010 IsaBody Challenge® with others and encourage them to join it with you.</li>
      <li>Eat clean foods that are mostly organic and enjoy lots of protein and healthy fats to maintain a healthy diet.</li>
    </ul>
    <h3>Mike’s Favorite Products</h3>
    <ul>
      <li>Isamune®</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes in Natural Creamy Chocolate</li>
    </ul>`;
  }

  private getRobynCSuccessStory(): string {
    return `<h3>Gym Owner Steps Up Fitness and Nutrition With Isagenix®</h3>
    <p>
      Robyn felt like a hypocrite teaching fitness classes at her New York gym. How could she promote health and wellness to her
      students when she was overweight herself?
    </p>
    <p>
      In addition to being owner of that gym, Robyn also had a nine-to-five job as an executive for a large corporation, plus a
      family to take care of — making life extremely hectic. Her busy schedule did more than just zap her energy— it made
      it difficult for her to find the time to shop for groceries and cook nutritious meals, and soon the weight began
      to pile on. But since incorporating Isagenix® into her busy lifestyle, Robyn has been teaching her fitness classes
      with a renewed sense of pride. Now 50 pounds lighter,* and first-place winner in the Women 50+ Category of the 2009
      IsaBody Challenge®, Robyn has the energy and passion to zip through her busy day effortlessly. And it all started
      with someone simply wanting to sell Isagenix at her gym. Many people had approached Robyn in the past to sell nutritional
      products at her gym, but before she’d agree to do it, she knew she would want to try them to see if they were effective
      for increased weight-loss and improved health. After all, she didn’t want to endorse anything that didn’t work. She
      started Isagenix at the beginning of the year, which just happened to coincide with the start of the IsaBody Challenge,
      so she thought she’d do it just to see what would happen.
    </p>
    <p>
      "I figured, ‘Why not join?’ I knew that I wanted to lose the weight, so a little healthy competition couldn’t hurt," explains
      Robyn.
    </p>
    <p>
      At first, Robyn was a little nervous about starting Isagenix. She questioned her willpower and worried if she would actually
      see results. Her best friend Karen was there to ease her anxiety and to offer support along the way.
    </p>
    <p>
      To keep her friend motivated and incorporate more exercise, Karen joined Robyn for regular jogs about three times a week
      and made a pact with her to do weekly weigh-ins together. At first, Robyn had to ask Karen to slow down or even walk
      during their runs, but as she continued working out, using Isagenix and losing the extra weight, that began to change.
      Before long, her increased energy and stamina began to push her friend’s limits and the roles were reversed. Once
      she reached a milestone of 50 pounds lost,* Robyn even caught up to and surpassed her slender best friend’s weight
      during their weekly weigh-ins.
    </p>
    <p>
      While Robyn knew that losing 50 pounds was a major accomplishment, it really hit home one day at the gym when a very lean
      and toned instructor approached her with some friendly advice.
    </p>
    <p>
      "She told me to get rid of my long pants and put some shorts on. It was time to show off my great legs," explains Robyn.
      "It felt great to hear that compliment."
    </p>
    <p>
      Living healthier has given Robyn a renewed zest for life. By giving her body proper nutrition with Isagenix, she no longer
      craves processed or high-calorie, high-fat foods and instead cooks with more whole and organic foods.
    </p>
    <p>
      Robyn says she’s proud of her new physique and the increased confidence that has come along with it. While she used to dread
      trying on clothes while shopping, now she loves the way she looks in all of her new outfits.
    </p>
    <h3>Robyn’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>If you are nervous about drinking your meals, simply start off with the IsaLean® Bars to get over your "chewing"
        habit, then move on to the IsaLean® Shakes after a few days. It makes the transition much easier.</li>
      <li>Be patient and stick with it! This is not a quick-fix solution, but an amazing nutritional lifestyle change. The
        changes will come and you will be amazed. It’s worth every minute!</li>
      <li>Read the success stories of past IsaBody Challenge finalists on the Isagenix.com to help stay motivated.</li>
    </ul>
    <h3>Robyn’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Bars</li>
      <li>IsaLean® Shakes</li>
    </ul>`;
  }

  private getSharonBSuccessStory(): string {
    return `<h3>For Sharon, Age Is Now Just a Number</h3>
    <p>
      At 62, Sharon had succumbed to the notion that losing weight and getting healthy just wasn’t going to happen for someone
      her age. She had nearly given up on slimming down for good, until she discovered Isagenix®.
    </p>
    <p>
      Now the svelte senior is enjoying a size 10* figure after dropping 42 pounds* and becoming the third-place winner in the
      Women’s 50+ Category of the 2009 IsaBody Challenge®. She still can’t believe her eyes when she looks at recent pictures
      of herself.
    </p>
    <p>
      "I just keep wondering who the skinny lady is in the pictures," jokes Sharon of British Columbia.
    </p>
    <p>
      Overweight and a yo-yo dieter most of her life, Sharon was always looking for answers to her weight problems. Though she
      had a gym membership and belonged to several weight-loss groups over the years, she never had success because she
      struggled to get motivated.
    </p>
    <p>
      The end of an unhealthy 30-year marriage helped the former bookkeeper come out of her shell more, but she still couldn’t
      beat her old eating habits, lose the extra weight and keep it off. Unsure of what to do to change the patterns, Sharon
      chalked her challenges up to getting older.
    </p>
    <p>
      "Physically, I still did everything and thought I felt well," explains Sharon. "I would get a little tired at times, but
      I thought it was part of the age thing."
    </p>
    <p>
      That idea was turned on its head shortly after she was introduced to Isagenix at a women’s networking event and put the products
      into her body. The energy she felt convinced her that Isagenix was different and after reading the success stories
      of those who had won the 2008 IsaBody Challenge, she decided to go for it.
    </p>
    <p>
      "I got motivated and really wanted it," shares Sharon. "When I saw the stories on the Web site, I realized that the people
      who’d won were just normal people like me."
    </p>
    <p>
      Sharon, who once shopped for size 18 clothes, is amazed that she’s now wearing a size 10* and excited to forgo full necklines
      for dresses with little straps. Her new husband of five years, Peter, loves the changes she’s experienced, especially
      her increased confidence. With only five more pounds to go to reach her goal weight, she’s channeling her weight-loss
      motivation into generating an extra income with her Isagenix business.
    </p>
    <p>
      Sharon’s only regret is that her beloved 80-year-old father, who also dealt with his own weight challenges, is not around
      to see her accomplishments. He had always encouraged her to get her health under control so that she wouldn’t have
      to be confined to a walker or wheelchair some day like he was.
    </p>
    <p>
      "I didn’t want to live like that in my 80s either," admits Sharon. "And now I have the solution. I truly believe Isagenix
      will help people live healthier lives and I love that I can empower others by helping them achieve their goals for
      health, weight loss and financial freedom."
    </p>
    <h3>Sharon’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Stick to the Cleansing and Fat Burning Systems. If you fall off the wagon, pick yourself up and get back on.</li>
      <li>Surround yourself with people who support your goals and won’t tempt or pressure you to give in during social situations.</li>
      <li>Make healthy choices when eating out. Go for the salads and avoid looking at other areas of the menu so you don’t
        get tempted.</li>
      <li>Drink at least eight glasses of purified water and exercise at least 30 minutes each day.</li>
      <li>There’s only one menu—Isagenix®! It’s all great from the IsaDelight® chocolates to Cleanse For Life® to the new IsaLean®
        Shakes.</li>
    </ul>
    <h3>Sharon’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla</li>
      <li>IsaDelight®</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getRyanRSuccessStory(): string {
    return `<h3>Former Shut-In Discovers New "Mission" With Isagenix®</h3>
    <p>
      For his entire life, Ryan had dreamed of leaving home after high school to serve on a mission for his church. At age 19,
      the day finally came, but instead of receiving papers telling him where he would be traveling to, he was told that
      he needed to shed 100 pounds from his 300-pound frame first.
    </p>
    <p>
      Heartbroken and angry, he sank into a deep despair and locked himself in his room rarely allowing anyone from the outside
      world in to visit him. For seven years, he spent his days moving from his bed to a recliner simply to eat or play
      computer games. Before long, his weight had ballooned to more than 400 pounds.
    </p>
    <p>
      It wasn’t until his parents asked him to pack his room in preparation for a move that Ryan truly hit rock bottom and knew
      he needed to change.
    </p>
    <p>
      "I felt worthless because I couldn’t help," shares the 25-year-old from Utah. "I watched my 53-year-old father pack up my
      room and the whole house by himself."
    </p>
    <p>
      At that same time, his cousin Jonathan called and encouraged him to come live with his family to get his life and nutrition
      back on track with Isagenix®. Though he had received the exact same offer multiple times from his cousin, this time
      was different. "I never want to feel helpless or have that happen to me ever again," says Ryan. His cousin and uncle
      Jim convinced him to change his environment and move in with them to get on the right track. For extra motivation,
      he joined the 2009 IsaBody Challenge® and depended on his extended family for advice and support. It didn’t take
      long for Ryan’s stunning transformation to begin. Though he hadn’t walked more than a few steps in several years,
      on his first day living at his uncle Jim’s house, he pushed himself to take his first short walk. He made it about
      20 feet to the end of the driveway on his achy legs and walked back, his extended family cheering him on the whole
      way.
    </p>
    <p>
      Before long, as he nourished his body with Isagenix, focused on his goal of losing at least 100 pounds as part of the Challenge
      and created a daily exercise routine of regular walks with his cousin, the weight and inches began to fall away.
      After six months, he finally got up the courage to look in the mirror for the first time in years and said he didn’t
      recognize himself.
    </p>
    <p>
      Spurred on by his physical results, Ryan began to come out of his shell. Smiling and waving at fellow walkers every morning,
      he began looking people in the eye and fully embracing his transformation. He cranked up his walking routine and
      even participated in a three-day walk to benefit breast cancer research. Once cushioned safely away from the harsh
      comments and judgmental eyes he used to encounter when he ventured into public, he admits that his "insult wall"
      is no longer up and he’s doesn’t fear speaking to people anymore.
    </p>
    <p>
      Now 110 pounds lighter* and the second-place winner in the Men 18-35 Category of the 2009 IsaBody Challenge, the soft-spoken
      man who once couldn’t resist a slice of pizza and spent hours on the computer, is back home with his family again
      — but his life is completely different. Instead of pizza every night for dinner, he fills up on IsaLean® Shakes.
      Instead of vegging in front of the computer, he goes for walks in the neighborhood. He’s even signed up for college
      in the fall.
    </p>
    <p>
      Ryan says his new "mission" in life is to reach out to others who are facing similar circumstances and have shut themselves
      away from the outside world.
    </p>
    <p>
      "My goal is to help them change their thoughts and realize that they can do it," shares Ryan. "They’re in a place where they
      likely don’t want to live and I want them to know that I’ve been there and life can be different. If I can help even
      one more person become happy like I am, then it’s all been worth it."
    </p>
    <h3>Ryan’s Tips For Weight-Loss and Health Success</h3>
    <ul>
      <li>Get a very dedicated buddy for exercise so you have someone there to encourage you and keep you accountable.</li>
      <li>Transform your negative thoughts. When a negative thought crosses your mind and you feel discouraged, counter it
        with a positive one. For instance, if you start thinking "I can’t do it," focus on the positive like how far you’ve
        come, and keep going.</li>
      <li>Remove all of your escape routes by confessing your weaknesses to someone. Also, if you know that someone will give
        in and let you "cheat" when you’re weak, have them agree ahead of time to support your commitment by not giving
        in to you when you have those moments.</li>
      <li>Change your environment. If you’ve struggled in the past to overcome temptations at home, you may have to consider
        going and living with someone else for a time.</li>
    </ul>
    <h3>Ryan’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Natural Creamy Chocolate</li>
      <li>IsaDelight®</li>
      <li>Want More Energy?® in Orange</li>
      <li>IsaFruits®</li>
    </ul>`;
  }

  private getAnthonyDSuccessStory(): string {
    return ``;
  }

  private getBruceAndTheresaCSuccessStory(): string {
    return ``;
  }

  private getCieraWSuccessStory(): string {
    return ``;
  }

  private getDerrekSSuccessStory(): string {
    return ``;
  }

  private getElaineGSuccessStory(): string {
    return ``;
  }

  private getGaryMSuccessStory(): string {
    return ``;
  }

  private getJessBSuccessStory(): string {
    return ``;
  }

  private getJoeBSuccessStory(): string {
    return ``;
  }

  private getLindaOSuccessStory(): string {
    return ``;
  }

  private getLyndsayAndCorySSuccessStory(): string {
    return ``;
  }

  private getMaryPSuccessStory(): string {
    return ``;
  }

  private getMattCSuccessStory(): string {
    return ``;
  }

  private getMichellePSuccessStory(): string {
    return ``;
  }

  private getMikeWSuccessStory(): string {
    return ``;
  }

  private getRadhaBSuccessStory(): string {
    return ``;
  }

  private getAdamVSuccessStory(): string {
    return ``;
  }

  private getDanielMSuccessStory(): string {
    return ``;
  }

  private getDavidGSuccessStory(): string {
    return ``;
  }

  private getDavidWSuccessStory(): string {
    return ``;
  }

  private getDerekZSuccessStory(): string {
    return ``;
  }

  private getDinaMSuccessStory(): string {
    return ``;
  }

  private getDonnaOSuccessStory(): string {
    return ``;
  }

  private getSuccessEricAndAmberHStory(): string {
    return ``;
  }
}
