const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSILfttgyK038HjSL3NwBJbkbR-d5vL_VnnHqanQFW_uSn8a09eylULl51wHIBibo_8wjGhVaMcjuZq/pubhtml?gid=579071959&amp;single=true&amp;widget=true&amp;headers=false';

        fetch(url)
            .then(response => response.text())
            .then(data => {
                const rows = data.split("\n");
                const headers = rows[0].split(",");
                let tableHTML = "<table><tr>";
                headers.forEach(header => {
                    tableHTML += `<th>${header}</th>`;
                });
                tableHTML += "</tr>";
                for (let i = 1; i < rows.length; i++) {
                    const cells = rows[i].split(",");
                    tableHTML += "<tr>";
                    cells.forEach(cell => {
                        tableHTML += `<td>${cell}</td>`;
                    });
                    tableHTML += "</tr>";
                }
                tableHTML += "</table>";
                document.getElementById('census').innerHTML = tableHTML;

                document.getElementById('search').addEventListener('input', function() {
                    const searchValue = this.value.toLowerCase();
                    const rows = document.querySelectorAll('#census table tr');
                    rows.forEach(row => {
                        const cells = row.querySelectorAll('td');
                        let found = false;
                        cells.forEach(cell => {
                            if (cell.innerHTML.toLowerCase().includes(searchValue)) {
                                found = true;
                            }
                        });
                        if (found) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    });
                });
            });