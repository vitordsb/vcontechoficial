const API_BASE_URL = "http://localhost:5000/api/blog";

class BlogApiService {
  async getAllPosts(params = {}) {
    try {
      const queryParams = new URLSearchParams();

      if (params.category) {
        queryParams.append("category", params.category);
      }

      if (params.search) {
        queryParams.append("search", params.search);
      }

      if (params.limit) {
        queryParams.append("limit", params.limit);
      }

      const url = `${API_BASE_URL}/posts${queryParams.toString() ? "?" + queryParams.toString() : ""}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to fetch posts");
      }

      return data.posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  async getPostById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to fetch post");
      }

      return data.post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  }

  async createPost(postData) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to create post");
      }

      return data.post;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(id, postData) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to update post");
      }

      return data.post;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to delete post");
      }

      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  }

  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to fetch categories");
      }

      return data.categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}

export default new BlogApiService();
