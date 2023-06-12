import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1>
          Let AI send you gigs straight to your email inbox. No platform
          browsing required.
        </h1>
        <a>Are you a company looking to hire?</a>
        <input></input>
        <button>Get started</button>
      </div>
      <div>
        <h2>Key features</h2>
        <h3>AI-powered matching algorithm</h3>
        <h3>Verified freelancers and companies</h3>
        <h3>Simple pricing</h3>
      </div>
      <div>
        <h2>How it works</h2>
        <h3>You create your profile</h3>
        <h3>
          AI algorithm matches you with companies best suited for your skills
          and preferences
        </h3>
        <h3>
          We send you regular emails of companies interested in your services
        </h3>
        <h3>
          We give you their preferred contact method in the emails so you can
          contact them directly
        </h3>
        <h3>The company decides whether to give you the job or not</h3>
        <h3>
          If you get the job, congratulations! If not, we&apos;ll keep sending
          you emails until you do
        </h3>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>Email</li>
        </ul>
      </div>
      <footer>Copyright and legal information.</footer>
    </>
  );
}
