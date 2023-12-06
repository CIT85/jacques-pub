# Project Idea: Local Community Garden
I selected this project because it was one of the suggested ideas from ChatGPT. While I'm not a gardener, I do enjoy seeing plants, so it works.
I used several prompts before I got the one to work right.
    
_Prompt One_ <br>

    Hi there! I need some help. I have to build a project for my HTML and CSS class. This class is a beginner's class, so the project idea must be simple. Can you provide me three project ideas I can build, and provide the following for EACH ONE: 
        - it must be outlined like an article with three sections. In those sections, please provide a heading and create the filler content for that section (it must be at least two paragraphs or content worth up to two to three paragraphs of space, if adding lists, please provide the filler content for it)- this is based on the idea you came up with
        - include a footer
        - navigation menu to navigate to the sections above and a logo link
        - the idea should be fun, simple (emphasis on simple), and PG for class
        - provide a title for the header for the main page
        - in the sections, make sure the content makes sense to use elements like details and summary, unordered or ordered lists, and table - this is important!

    I can't emphasize this enough, PLEASE, provide me filler content!!
    Now, show me what you got. I appreciate the help!

_ChatGPT Result (for spacing purposes, I omitted two of the three projects suggested, and showcased the one I chose)_

    Absolutely, let's create three simple and engaging project ideas for your HTML and CSS class, complete with detailed filler content for each section.
    
    ...
    ---
    ### Project 2: "Local Community Garden"

    #### Main Page Title:
    **"Green Thumb: Our Community Garden"**

    #### Navigation Menu:
    - Home (Logo link)
    - Garden Layout
    - Planting Schedule
    - Volunteer Information

    #### Sections:
    1. **Garden Layout**
    - Heading: "Designing Our Garden Space"
    - Content: Our community garden is a space of vibrant life and color. The garden is divided into several sections, each with its own unique plants. The Herb Corner is filled with aromatic herbs like basil, rosemary, and thyme, perfect for any culinary enthusiast. The Vegetable Patch boasts a variety of vegetables, from juicy tomatoes to crisp lettuces, all grown organically. There's also a Flower Bed, where roses, daisies, and sunflowers add beauty and attract pollinators.
    - Elements: Use an ordered list for different sections: Herb Corner, Vegetable Patch, Flower Bed.

    2. **Planting Schedule**
    - Heading: "When to Plant and Harvest"
    - Content: Knowing when to plant is crucial for a successful harvest. Our planting schedule is designed to make the most of each season. Spring is the time for planting most of our vegetables and flowers, as the frost thaws and the days grow warmer. Summer is when we see the fruits of our labor, with most flowers in full bloom and vegetables ready for harvesting. Fall is the time to plant winter crops and prepare the soil for the next year.
    - Elements: Use a table to display planting times for different plants: Tomatoes (Spring), Roses (Spring), Lettuces (Summer).

    3. **Volunteer Information**
    - Heading: "Join Our Gardening Community"
    - Content: Volunteers are the heart of our community garden. Whether you're a seasoned gardener or a beginner, there's a place for you here. We organize weekly gardening sessions where volunteers can learn about sustainable gardening practices, plant care, and more. It's also a great opportunity to meet fellow gardening enthusiasts and contribute to the community. If you're interested in joining, please sign up through our website or contact us directly.
    - Elements: A paragraph with contact details and a call-to-action.

    #### Footer:
    - Quick links (Garden Layout,

    Planting Schedule, Volunteer)
    - Contact email: info@greenthumb.com
    - Copyright notice

    ---
    ...
I did another prompt to provide more filler content. 

I love using ChatGPT to fill my content, and it challenges me to figure out the best elements to deliver the information to the user.


## The Content and Menu
My project will have three pages or one page, and each page will have a header, main, and footer. Each page will contain a page title with three sections, and navigation menu.
If I go with three pages, here is the setup:
1. Green Thumb Community Garden - Home
    - Welcome to Green Thumb Community Garden
    - What We Grow
    - Join Us
2. Explore Our Garden - Green Thumb Community Garden
    - Explore Our Garden Layout
    - Seasonal Changes
    - Garden Map
3. Join Us - Volunteer at Green Thumb Community Garden
    - Become a Volunteer
    - Volunteer Roles and Responsibilities
    - How to Join

If I go with one page:
1. Green Thumb Community Garden
    - Welcome to Green Thumb Community Garden
    - What We Grow
    - Explore our Garden
    - Join Us - Volunteer at Green Thumb Community Garden



# Float > Flex | Grid
Moving from floating styles to Flex allow me to make a dynamic website with a bit of flexibility. I was able to restructure how my images lay within the page and easily create columns and rows.

# Media Queries
It's important to build your websites with mobile friendly views in mind. Most users will visit websites more often via their smart phone device that come in various screen sizes. Depending on the screen size of the user's viewport, they're able to navigate your page more freely and have a better UI experience. In my project, you'll see me take on three main viewport sizes that I believe are good cut off points; however, I set up the query to be `max-width` over `min-width`, because when using `max-width` the mindset is no more than which in my opinion works more in your favor than 'bare minimum'.