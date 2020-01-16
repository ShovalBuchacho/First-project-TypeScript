var Shape: number = parseFloat(prompt("Welcome to the best shape simulation ever in the entire world!\n please select desired shape:\n 1)Square\n 2)Rectangle\n 3)Triangle"));
var length: number = 0;
var height: number = 0;
var signE: string = " * ";
var shapeContent: number = 0;
var tabIndicator: string = "&nbsp;&nbsp;";
var tabIndicator1: string = "&nbsp;&nbsp;&nbsp ";
var newLineIndicator: string = "<br/>";
var enterLength: string = "Please enter {value} side length:";
var PleaseSelect: string = "please select shape content: \n 1)*****\n 2) *     *\n 3) 12345\n 4) 54321"
var Error1: string = "Error.please select 1 or 2 or 3 or 4";
var Error2: string = "Error.please enter a positive integer number.";

function DrawShape(sign: string, indicator: string) {
    document.write(sign + indicator);
}

if (Shape <= 0 || Shape >= 4) {
    alert("error. please select 1 or 2 or3");
} else {
    if (Shape == 1) {
        var length: number = parseFloat(prompt(enterLength.replace("{value}", "square")));
        var Perimeter: number = length * 4;
        var Area: number = length * length;
        if (length < 0) {
            alert(Error2);
        } else {
            shapeContent = parseFloat(prompt(PleaseSelect));
        }
        for (let i = 0; i < length; i++) {
            switch (shapeContent) {
                case 1:
                    for (let j = 0; j < length; j++) {

                        DrawShape(signE, tabIndicator)
                    }
                    document.write(newLineIndicator);
                    break;
                case 2:
                    for (let j = 0; j < length; j++) {
                        if ((j == 0 || j == length - 1) || (i == 0 || i == length - 1)) {
                            DrawShape(signE, tabIndicator)
                        } else {
                            DrawShape(tabIndicator1, tabIndicator)
                        }

                    }
                    document.write(newLineIndicator);
                    break;
                case 3:
                    for (let j = 1; j <= length; j++) {
                        DrawShape(j.toString(), tabIndicator)

                    } document.write(newLineIndicator);
                    break;

                case 4:
                    for (let j = length; j > 0; j--) {
                        DrawShape(j.toString(), tabIndicator)
                    } document.write(newLineIndicator);
                    break;
                default:
                    alert(Error1);
                    break;
            }
        }
        document.write(newLineIndicator);
        document.write("Square Perimeter: ", Perimeter.toString());
        document.write(newLineIndicator);
        document.write("Square Area: ", Area.toString());
    }
}
if (Shape == 2) {
        length = parseFloat(prompt("Please enter rectangle side length:"));
    height = parseFloat(prompt("Please enter rectangle height:"));
    var Perimeter: number = (length + height) * 2
    var Area: number = length * height;

    if (length < 0 || height < 0) {
        alert(Error2);
    } else {
        shapeContent = parseFloat(prompt(PleaseSelect));
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < length; j++) {
            switch (shapeContent) {
                case 1:
                    DrawShape(signE, tabIndicator)
                    break;
                case 2:
                    if ((j == 0 || j == length-1) || (i == 0 || i == height-1 )) {
                        DrawShape(signE, tabIndicator)
                    } else {
                        DrawShape(tabIndicator1, tabIndicator)
                    }
                    break;
                case 3:
                    DrawShape((j + 1).toString(), tabIndicator)
                    break;
                case 4:

                    DrawShape((length - j).toString(), tabIndicator)
                    break;
                default:
                    alert(Error1);
                    break;
            }
        } document.write(newLineIndicator);

    }   
    document.write(newLineIndicator);
    document.write("Rectangle Perimeter: ", Perimeter.toString());
    document.write(newLineIndicator);
    document.write("Rectangle Area: ", Area.toString());
}if (Shape == 3) {
    var length: number = parseFloat(prompt(enterLength.replace("{value}", "Triangle")));

    var Area: number = (length * length) / 2;
    if (length < 0) {
        alert(Error2);
    } else {
        shapeContent = parseFloat(prompt(PleaseSelect));
    }
    for (let i = 0; i <= length; i++) {
        switch (shapeContent) {
            case 1:
                for (let j = 0; j < i; j++) {
                    DrawShape(signE, tabIndicator)
                }
                document.write(newLineIndicator);
                break;
            case 2:
                for (let j = 0; j <= i; j++) {
                    if ((j == 0 || j == i) || (i == 0 || i == length)) {
                        DrawShape(signE, tabIndicator)
                    } else {
                        DrawShape(tabIndicator1, tabIndicator)
                    }
                }
                document.write(newLineIndicator);
                break;
            case 3:
                for (let j = 1; j <= i; j++) {
                    DrawShape(j.toString(), tabIndicator)
                }
                document.write(newLineIndicator);
                break;
            case 4:
                for (let j = length; j > length - i; j--) {
                    DrawShape(j.toString(), tabIndicator)
                }
                document.write(newLineIndicator);
                break;
            default:
                alert(Error1);
                break;
        }
    }
    document.write(newLineIndicator);
    document.write("Triangle Area:  ", Area.toString());
}

