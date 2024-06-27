<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Wether website/style.css">
    <title>Weather website</title>
</head>
<body>
    <div class="container">
        <section class="main">
            <section class="inputs">
                <input type="text" placeholder="Enter Your City Name.." id="cityinput">
                <input type="submit" value="submit" id="add">
                <button placeholder="submit" id="add"></button>
            </section>

            <section class="display">
                <div class="wrapper">
                    <h2 id="cityoutput"></h2>
                    <p id="description"></p>
                    <p id="temp"></p>
                    <p id="wind"></p>
                </div>
            </section>

        </section>
    </div>
    <script src="Wether website/script.js"></script>
</body>
</html>
