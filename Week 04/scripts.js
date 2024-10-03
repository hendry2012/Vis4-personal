var total = 0;
let history = [];
let operationCount = { additions: 0, subtractions: 0 };


    function updateResult() {
        document
            .querySelector("#resultId")
            .innerHTML = total;
        updateHistory();
        updateSummary();
        checkTotal();
    }

    function updateHistory() {
        let historyContent = "";

        for (let i = 0; i < history.length; i++){
            historyContent += "<li onclick='removeHistoryItem(" + i + ")'>" + history[i] + "</li>";
        }
        document
            .querySelector("#historyList")
            .innerHTML = historyContent;
    }

    function updateSummary() {
        document
            .querySelector("#summary")
            .innerHTML = 
                `You ordered: ${operationCount.additions} times <br>
                You cancelled: ${operationCount.subtractions} times`;
    }

    function checkTotal() {
        if (total > 0) {
            document
                .querySelector("#totalMessage")
                .innerHTML = "You have burgers!";
        } else if (total < 0) {
            document
                .querySelector("#totalMessage")
                .innerHTML = "You owe me burgers!!!";
        } else {
            document
                .querySelector("#totalMessage")
                .innerHTML = "You have no burgers :(";
        }
    }

    function clearAll() {
        total = 0;
        history = [];
        operationCount.additions = 0;
        operationCount.subtractions = 0;
        updateResult();
    }

    function removeHistoryItem(index) {
        history.splice(index, 1);
        updateHistory();
    }
    
    document
        .getElementById("minusTwo")
        .addEventListener("click",
            function() {
                total -= 2;
                history.push("-2 Burgers");
                operationCount.subtractions++;
            updateResult();
            });

    document
        .getElementById("minusOne")
        .addEventListener("click",
            function() {
                total -= 1;
                history.push("-1 Burger");
                operationCount.subtractions++;
            updateResult();
            });

    document
        .getElementById("reset")
        .addEventListener("click",
            function() {
                total = 0;
                history.push("Reset");
            updateResult();
        });
            
    document
        .getElementById("plusOne")
        .addEventListener("click",
            function() {
                total += 1;
                history.push("+1 Burger");
                operationCount.additions++;
            updateResult();
            });

    document
        .getElementById("plusTwo")
        .addEventListener("click",
            function() {
                total += 2;
                history.push("+2 Burgers");
                operationCount.additions++;
            updateResult();
            });
    
    document
        .getElementById("clearAll")
        .addEventListener("click",
            function() {
                clearAll();
            });