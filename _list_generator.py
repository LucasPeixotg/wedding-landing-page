from os import listdir

if __name__ == "__main__":
    # get item list
    items = listdir("./image/gifts")

    for item in items:
        print("<li class=\"card bg-none col-10 col-md-4 mb-4 col-lg-3 border-none\">")
        print(f"\t<img src=\"image/gifts/{item}\" class=\"card-img-top border-inverse-cup\" alt=\"Foto de {item.split('.')[0]}\">")
        print("\t<div class=\"card-body bg-accent border-cup rounded-bottom\">")
        print(f"\t\t<p class=\"card-text text-center white fs-3 montserrat\">{item.split('.')[0]}</p>")
        print("\t</div>")
        print("</li>")
