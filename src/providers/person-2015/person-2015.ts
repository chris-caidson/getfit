import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2015Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
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

}
