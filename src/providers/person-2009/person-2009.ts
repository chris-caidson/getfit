import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2009Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
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
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
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
    <h3>April’s Tips for Weight-Loss and Health Success</h3>
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
    <h3>Christina’s Tips for Weight-Loss and Health Success</h3>
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
    <h3>Donovan’s Tips for Weight-Loss and Health Success:</h3>
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
    <h3>Dr. Ken’s Tips for Weight-Loss and Health Success</h3>
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
    <h3>Jana’s Tips for Weight-Loss and Health Success</h3>
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
      <li>Amped Hydrate® Sticks</li>
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
    <h3>Jason’s Tips for Weight-Loss and Health Success</h3>
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
    <h3>Leslie’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Sign up for and stick to the IsaBody Challenge®— it’ll help you stay motivated.</li>
      <li>Get rid of any negativity. Don’t associate yourself with people who don’t believe in what you’re doing.</li>
      <li>Stay focused. If you flub up, don’t be so hard on yourself — just get right back up and keep going.</li>
    </ul>
    <h3>Leslie’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Amped Hydrate®</li>
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
    <h3>Mark’s Tips for Weight-Loss and Health Success</h3>
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
      <li>Amped Hydrate®</li>
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
    <h3>Sharon’s Tips for Weight-Loss and Health Success</h3>
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
    <h3>Ryan’s Tips for Weight-Loss and Health Success</h3>
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
      <li>Amped Hydrate® in Orange</li>
      <li>IsaFruits®</li>
    </ul>`;
  }
}
