
# GUIDELINE FOR OVERVIEW MODULE

OVERVIEW:
(this will probably require states - all available sizes, all available quantity, and then either user-selected size, and user-selected quantity OR just default size & qty)

Image Gallery (elements of this can also be shareable)
  - photo gallery showing images of product
    - each photo is specific to product style
    - each time new style is chosen, the gallery will update with new photos corresponding to that new style
    - allow users to browse between and zoom in
    - viewable in 2 states:
      - ### default collapsed
        - a single main image, overlaid by list of thumbnail images (how the mockup is set up)
        - default: first image will be displayed as main image
        - when switching between styles, index is saved (via state) and maintained for when gallery updates with new style
        - clicking thumbnails will update main image to match clicked one
        - the thumbnail that corresponds to main image should be highlighted
        - clicking on currently selected thumbnail will have no effect
        - display up to 7 thumbnail images
        - if more than 7 available, allow user to scroll through via arrow buttons
        - there should be right and left arrows, and upon clicking them, the main image/ selected thumbnail should update accordingly
        - if clicking right and left arrows require us to update & generate new thumbnails then do so
        - if user hovers over main image - mouse icon should switch to magnifying glass and then if clicked, image gallery should switch to expanded view
        - first image, no left arrow. last image, no right arrow
      - ### expanded
        - should still contain arrows
        - primarily consist of main image, it will span the entire screen
        - instead of thumbnails, we have icons (same functionality)
        - if image is clicked in this view, we zoom image by 2.5x
        - mouse icon should become a '+' symbol
          - after clicking, portion of image displayed should relative to mouse position on screen
          in zoomed-zoomed view, mouse icon is '-' and upon clicking should return to normal expanded view

Product Info (shareable)
  - star ratings (# of reviews) (talk about how to represent - static img or css)
    - represented by array of solid or outlined stars (total 5)
    - visual should be split by quarter of points
    - next to stars will be a link to 'Read all reviews'
      - this link should scroll down to 'Ratings & Reviews' section
  - Product Category
  - Product Title
  - Price - default value should be available
    - these prices are not derived from the product but rather the style
    - if sale, certain styles should be applied
  - product overview
  - share on social media
    - fb button
    - twitter button
    - pinterest button


Style Selector
  - each style displayed as thumbnail and be clickable
  - no limit to # of styles
  - should appear in rows of 4
  - default style selected should be the first one in the list
  - product will always have one style (minimum one)


Add to Cart
  - two dropdowns:
    - size selector
      - display sizes that are currently in stock
      - if no remaining stock, dropdown should become inactive and read 'OUT OF STOCK'
      - when collapsed should show current selected size
      - default: 'select size'

    - quantity selector
      - dropdown will be sequence of ints from 1 to maximum
        - maximum: quantity available, or hard limit of 15
      - default: display '-' when size has not been selected and qty dropdown is disabled
      - once size has been selected, set default to '1' and dropdown enabled

    - add to cart
      - button needs to grab style, size, and quantity of product selected
      - if default 'select size' is currently selected (meaning user has not selected a size)
        - clicking this button will open the size dropdown and a msg will appear stating 'please select size'
      - if there is no stock
          - this button is hidden
      - if both valid size and valid quantity
        - clicking this button will add product to user's cart

# GUIDELINE FOR RATINGS AND REVIEW MODULE

# GUIDELINE FOR RELATED ITEMS MODULE
