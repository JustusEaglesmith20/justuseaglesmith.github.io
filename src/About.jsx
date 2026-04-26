/* About — single consolidated section.
   Contains resume, experience, projects, research, skills, and contact
   inline so this is the only file the section depends on. */

const PROFILE = {
  name: "Justus Eaglesmith",
  role: "AI Engineer · Data Scientist · MLOps",
  location: "PDX, Oregon",
  email: "justuseaglesmith@gmail.com",
  disclaimer: "The opinions on this page do not reflect the opinions or values of my employer.",
  blurb: `
  Thank you for coming to explore my reflections I've noted here. My goal is to share my thoughts
  & retrospects on in depth wrestling of existential topics. I have always been fascinated with "truth".
  Obviously, truth, in and of itself, is an oxymoron, considering it is always subjective to the observer.
  However, I do think from a human's observation we can identify replicable causal systems that we label as
  truths. For this reason, I hope to excavate the true understandings of the cosmos using any tool necessary.
  My formal training is within statistics (Econometrics BA), consulting (MBA), ML/DL/AI (MS in Data Science + employement
  as AI Engineer), and software engineering.

  I originally started this blog because of my frustration with how quantum mechanics is communicated with a
  hand wavey description of something being in multiple places simutaneously. It gives off the impression that
  this is a fundamental truth of the reality we live in which is a lie, or misleading. The truth about this is that
  quantum particles are so fragile due to there near massless state, that the act of trying to observe or measure them
  (requiring light to capture naturally), bounces, or sometimes even destroys that subatomic particle to the point we had no
  way of confidently stating where it was, what it was doing, etc. But this phenomena is often communicated like this is
  possible in macro physics. It would only be true, if some alien being, required the power of 100 million suns to look at or
  observe something we did on Earth. Which would result in them saying, "I have no idea, when I looked at them, they dissapeared!
  But I know they were there because I could smell them!".

  `,
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/justus-eaglesmith" },
    { label: "GitHub", href: "https://github.com/JustusEaglesmith20?tab=repositories" },
    { label: "Email", href: "mailto:justuseaglesmith@gmail.com" }
  ],
};

const RESEARCH = {
  title: "The accuracy and replicability of data analysis performed with large language models",
  authors: "J. Eaglesmith et al.",
  venue: "The American Statistician",
  status: "Under editorial & peer review",
  year: "2026",
  takeaway: "Accuracy varies sharply by distribution and model generation. Newer models recover some distributions extremely well while missing others entirely. No model is uniformly accurate, and the practical barriers to replication (closed weights, deprecated endpoints, prompt sensitivity) reinforce that full automation of data analysis via LLMs remains on the horizon.",
  keywords: ["Large Language Models", "Parametric Statistics", "Distribution Identification", "Replicability", "Evaluation"],
};

const EDUCATION = [
  { degree: "M.S. Data Science", school: "Willamette University" },
  { degree: "MBA", school: "Willamette University, Atkinson Graduate School of Management" },
  { degree: "B.A. Economics", school: "Willamette University" },
];

function formatBullet(s){
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')){
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

function About(){
  return (
    <section id="about">
      <div className="container">
        {/* Intro */}
        <header>
          <div>About</div>
          <h1>{PROFILE.name}</h1>
          <p>{PROFILE.role} · {PROFILE.location}</p>
          <p>{PROFILE.blurb}</p>
          <ul>
            {PROFILE.socials.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </header>

        {/* Education */}
        <div>
          <h3>Education</h3>
          <ul>
            {EDUCATION.map((e, i) => (
              <li key={i}><strong>{e.degree}</strong>, {e.school}</li>
            ))}
          </ul>
        </div>

        {/* Research */}
        <div>
          <h3>Research</h3>
          <article>
            <h4>{RESEARCH.title}</h4>
            <p>{RESEARCH.authors} · {RESEARCH.venue}, {RESEARCH.year}</p>
            <p><em>{RESEARCH.status}</em></p>
            <p>{RESEARCH.takeaway}</p>
            <p><em>Keywords:</em> {RESEARCH.keywords.join(', ')}</p>
          </article>
        </div>

        {/* Contact */}
        <footer>
          <h3>Contact</h3>
          <p>{PROFILE.email}</p>
        </footer>
      </div>
    </section>
  );
}

window.About = About;
