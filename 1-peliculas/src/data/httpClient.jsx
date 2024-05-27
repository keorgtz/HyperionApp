const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWVkNThiZGNjZWVhZTQ3ZWRjMGJkMDE0NTU0MWI4NiIsInN1YiI6IjY2NTM4OGM0ZGZkYWM1NDgxODBhZWU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrQ5_HqGE7K8C43YIUhdmCKWAAaP8qcmnXmaG62y-eY",
      "Content-Type": "application/json;charset=utf-8"
    }
  }).then((result) => result.json());
}
