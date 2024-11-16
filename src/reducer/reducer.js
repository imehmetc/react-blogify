export const initialState = {
    blogData: [],
    categoryData: [],
    isDropdownOpen: false,
    selectedCategory: "All Categories",
    search: "",
    title: "",
    content: "",
    imageUrl: "",
    userEmail: "",
    likeCount: "",
    viewCount: "",
    userCommentCount: "",
    category: "Select a Category",
    isLoading: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        // case-1
        case"getBlogs": return{
            ...state,
            blogData: action.payload
        }
        // case-2
        case"getCategories": return{
            ...state,
            categoryData: action.payload
        }
        // case-3
        case"profileDropdown": return{
            ...state,
            isDropdownOpen: action.payload
        }
        // case-4
        case"selectedCategory": return{
            ...state,
            selectedCategory: action.payload
        }
        // case-5
        case"setSearch": return{
            ...state,
            search: action.payload
        }
        // case 6-13
        case"setTitle": return{
            ...state,
            title: action.payload
        }
        case"setContent": return{
            ...state,
            content: action.payload
        }
        case"setCategory": return{
            ...state,
            category: action.payload
        }
        case"setImageUrl": return{
            ...state,
            imageUrl: action.payload
        }
        case"setUserEmail": return{
            ...state,
            userEmail: action.payload
        }
        case"setLikeCount": return{
            ...state,
            likeCount: action.payload
        }
        case"setViewCount": return{
            ...state,
            viewCount: action.payload
        }
        case"setUserCommentCount": return{
            ...state,
            userCommentCount: action.payload
        }
        // case-14
        case"resetForm": return{
            ...state,
            title: "",
            content: "",
            imageUrl: "",
            userEmail: "",
            likeCount: "",
            viewCount: "",
            userCommentCount: "",
            category: "Select a Category"
        }
        // case-15
        case"addNewBlog": 
            const updateBlogs = [...state.blogData, action.newBlog];
            return{
                ...state,
                blogData: updateBlogs
        }
        // case-16
        case "deleteBlog":
            return {
                ...state,
                blogData: state.blogData.map(item => 
                    item.id === action.payload ? {...item, isDeleted: true} : item
                )
            };
        // case-17
        case"updateBlog":
            return{
                ...state,
                blogData: state.blogData.map(item => item.id === action.payload.id ? {...action.payload} : item)
            };
        // Loading
        case"SET_LOADING": return { ...state, isLoading: action.payload };
    }
}