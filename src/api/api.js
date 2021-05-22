import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class SharelyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${SharelyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }


  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** get all posts (titles). */

  static async getAllTitles(itemName) {
    let res = await this.request("posts", { itemName });
    console.log("API");
    return res.posts;
  }

  /** get post by id. */

  static async getPost(id) {
    // debugger;
    let res = await this.request(`posts/${id}`);
    return res.post;
  }

  /** update post. */

  static async addPost(newData) {
    let res = await this.request("posts", newData, "post");
    return res.post;
  }

  /** update post. */

  static async updatePost(id, newData) {
    let res = await this.request(`posts/${id}`, newData, "patch");
    return res.updatedPost;
  }

  /** delete post. */

  static async deletePost(id) {
    let res = await this.request(`posts/${id}`, {}, "delete");
    return res.post;
  }

  /** like a post. */

  static async likePost(username, id) {
    let res = await this.request(`users/${username}/like/${id}`, {}, "post");
    return res.liked;
  }


  /** unlike a post. */

  static async unLikePost(username, id) {
    let res = await this.request(`users/${username}/like/${id}`, {}, "delete");
    return res.unliked;
  }

  /** add a comment. */

  static async addComment(postId, text) {
    let res = await this.request(`posts/${postId}/comments`, { text }, "post");
    return res.comment;
  }

  /** delete a comment. */

  static async removeComment(postId, commentId) {
    let res = await this.request(`posts/${postId}/comments/${commentId}`, {}, "delete");
    return res.deletedComent;
  }


  /** invite a post. */

  static async invitePost(username, id) {
    let res = await this.request(`users/${username}/invite/${id}`, {}, "post");
    return res.invite;
  }


  /** un-invite a post. */

  static async unInvitePost(username, id) {
    let res = await this.request(`users/${username}/invite/${id}`, {}, "delete");
    return res.uninvite;
  }

  /** get email address by username. */

  static async fetchEmail(username) {
    let res = await this.request(`users/${username}/email`);
    return res.email;
  }
}

export default SharelyApi;
