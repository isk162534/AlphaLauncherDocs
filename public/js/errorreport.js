const tableElement = document.querySelector("#table")
const idElement = document.querySelector("#id")
const submitElement = document.querySelector("#submit")

function createTableRow(k, v) {
    const tr = document.createElement("tr")

    const ktd = document.createElement("td")
    ktd.innerText = k
    tr.appendChild(ktd)

    const vtd = document.createElement("td")
    vtd.innerText = v
    tr.appendChild(vtd)

    return tr
}

async function load(id) {
    try {
        submitElement.disabled = true

        res = await fetch("https://api.alphabeta.pw/errorreport/report?id=" + id)
        if (!res.ok) {
            alert("요청 실패")
            return
        }

        const resBody = await res.json()
        if (!(resBody && Array.isArray(resBody) && resBody.length > 0)) {
            alert("결과 없음")
            return
        }
        const result = resBody[0]._source;

        const rows = []
        rows.push(createTableRow("id", id))
        Object.entries(result).forEach(([k, v]) => {
            const tr = createTableRow(k, v)
            rows.push(tr)
        })

        tableElement.replaceChildren(...rows)
    }
    catch (e) {
        alert("오류")
    }
    finally {
        submitElement.disabled = false;
    }
}

function onSubmit() {
    load(idElement.value)
    return false
}