import { connect } from "./connect";

export const signUp = async (username, email, password) => {
  const res = await connect.post("/api/user/signup", {
    username,
    email,
    password,
  });
  return res;
};
export const login = async (username, password) => {
  const res = await connect.post("/api/user/login", {
    username,
    password,
  });
  return res;
};

export const getUser = async (token) => {
  const res = await connect.get("/api/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res
};

export const createANote = async (note, token) => {
  const res = await connect.post('/api/note/create', note, {
    headers: { Authorization: `Bearer ${token}` },
  })
 return res
}
