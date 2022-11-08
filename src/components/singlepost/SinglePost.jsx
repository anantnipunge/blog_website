import "./singlePost.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cms.balanceofnature.com/admin/uploads/image/carey-final.JPG"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Food stack for today!
          <div className="singlePostEdit">
            <i className="postEditIcon">
              <EditIcon style={{ color: "teal" }} />
            </i>
            <i className="postEditIcon">
              <DeleteIcon style={{ color: "tomato" }} />
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Anant Nipunge</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          “I started taking Balance of Nature because good health is so
          important to me. I have had previous health issues . . . and I want to
          do everything in my power to stay as healthy as I can be, and I felt
          using Balance of Nature as a supplement to my nutrition was the way to
          go and it's been great," says customer Carey Grader.” Carey G. is an
          inspirational speaker and owner of Mind-Mettle, an organization
          dedicated to encouraging people to have the strength to overcome.
          Carey is a big believer in making the decision to move past things and
          be happy and healthy. She is a breast cancer and lupus survivor of
          many years, which inspired her to help people overcome illness and
          adversity and live their best lives. Carey is also a farmer, gardener,
          and chicken mom. She and her husband recently purchased property in an
          effort to restore it to its natural beauty. She says nature played and
          continues to play a huge role in her overall health and well-being.
          During her battles with cancer and lupus, she often turned to nature.
          If she was in pain or stressed or worried, she would go for a hike. If
          she had an illness, she’d go to the beach. “Out with the bad, in with
          the new,” she says. Having experienced health issues, Carey wanted to
          do everything she could to stay as healthy as possible. “I started
          taking Balance of Nature just because good health is so important to
          me. I have had previous health issues . . . and I want to do
          everything in my power to stay as healthy as I can be, and I felt
          using Balance of Nature as a supplement to my nutrition was the way to
          go and it's been great.” Carey was first attracted to Balance of
          Nature because it is all-natural, “it’s just fruits and vegetables,
          like here on the farm,” she says. She adds that Balance of Nature
          gives her peace of mind. She said she doesn’t get all the fruits and
          vegetables she knows she’s supposed to eat, and she worries about
          that. “But if I take Balance of Nature, I feel good, I feel like I’m
          covered, and I’m good for the day,” she says. “ I would never go a day
          without it because it just completes my nutrition.” Carey has taken
          Balance of Nature for about a year. She says her overall well-being
          has benefited from it. “I have seen tremendous improvement
          externally—my hair, my nails, my skin—looks good, looks healthy, can’t
          complain about that,” she shares. “Internally, I feel stronger, I have
          a lot more energy, I can focus better . . . ” She noticed so much
          overall improvement that she says she had to tell everybody. She even
          wrote a letter to Balance of Nature expressing her desire to share
          with others what the product has done for her. As a motivational
          speaker, Carey teaches people that they have a choice: You can either
          be sick, or you can be healthy. You choose. You can be a victim, or
          you can be a survivor. It's your call, it’s all about mental toughness
          . . . and making the choice to be healthy. Part of that choice is
          doing the right things: exercising, eating healthy, . . . doing
          whatever it is you need to do to be healthy. It’s all about a mindset,
          and you have a choice—it’s a simple decision—either you can play the
          sick role or the healthy role. It really is that easy. Sometimes that
          decision is hard for people out of fear, Carey says. She advises
          others to not believe everything they hear or read.. Carey says she
          wouldn’t go a day without Balance of Nature. “It’s part of my routine,
          my regime, what I do, I believe in it. It’s proven itself to me,” she
          says. “I love Balance of Nature. It’s made a difference for me. . . .
          I think it's great. You should try it!” To get more fruits and
          vegetables in your day-to-day, try Balance of Nature and experience
          the difference for yourself!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
