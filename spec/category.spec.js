import Category from "../src/models/Category.js";

describe("Category tests", () => {
  let categoryId = null;

  it("can be created", async () => {
    const category = { title: "Desserts" };
    const result = await Category.createCategory(category.title);
    expect(result).not.toBeNull();
    categoryId = result;
  });

  it("can not be created with invalid data", async () => {
    try {
      const category = { title: null };
      await Category.createCategory(category.title);
    } catch (error) {
      expect(error.message).toMatch(/Column 'title' cannot be null/);
    }
  });

  it("can get all categories", async () => {
    const getAll = await Category.getAllCategories();
    expect(getAll).not.toBeNull();
    expect(getAll.length).toBeGreaterThan(0);
  });

  it("can get a category by id", async () => {
    const getCategory = await Category.getCategoryById(categoryId);
    expect(getCategory).not.toBeNull();
    expect(getCategory.title).toBe("Desserts"); 
  });

  it("can be updated", async () => {
    const updatedCategory = { title: "Sweets" }; 
    const result = await Category.updateCategory(
      categoryId,
      updatedCategory.title 
    );
    expect(result).toBe(1);
    const category = await Category.getCategoryById(categoryId);
    expect(category.title).toBe("Sweets"); 
  });

  it("can delete a category", async () => {
    await Category.deleteCategory(categoryId);
    const deletedCategory = await Category.getCategoryById(categoryId);
    expect(deletedCategory).toBeNull();
  });
});
