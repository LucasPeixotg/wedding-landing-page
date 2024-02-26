from os import listdir

if __name__ == "__main__":
    # get item list
    items = listdir("./image/gifts")

    for item in items:
        print(f"<div class=\"gift-card col-10 col-md-4 col-lg-3 mx-auto mx-md-3 d-flex align-items-end justify-content-center\" style='background-image: url(\"../image/gifts/{item}\");'>")
        print(f"\t<h4 class=\"text-center fw-bold montserrat secondary-color\">{item.split('.')[0]}</h4>")
        print(f"</div>")
