import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatar_url: "", name: "", role: "" }

// publishedAt: Date

// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/baziotabeans.png",
      name: "FΓ‘bio Baziota",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },
      { type: "link", content: "π jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Silva-jr.png",
      name: "JosΓ© da Silva",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },
      { type: "link", content: "π jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

{
  /* <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p> */
}

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
