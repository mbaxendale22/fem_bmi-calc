const calculationForm = document.querySelector('#calculation-form')

// todo add validation, min max, required

export function renderMetricForm() {
    calculationForm.innerHTML = `
    <div class="form-group">
        <label for="height">Height</label>
        <div class="input-group">
            <input type="text" id="height" name="height" class="form-control" placeholder="0" />
            <p class="h3">cm</p>
        </div>
    </div>
        <div class="form-group">
            <label for="weight">Weight</label>
            <div class="input-group">
                <input type="text" id="weight" name="weight" class="form-control" placeholder="0" />
                <p class="h3">kg</p>
            </div>
        </div>
        <button type="submit" id="submit" class="btn btn-primary">Calculate</button>
    `
}

export function renderImperialForm() {
    calculationForm.innerHTML = `
    <div class="form-group">
        <label for="height">Height</label>
        <div class="input-group">
            <input type="text" id="feet" name="feet" class="form-control" placeholder="0" />
            <p>ft</p>
        </div>
        <div class="input-group">
            <input type="text" id="inches" name="inches" class="form-control" placeholder="0" />
            <p>in</p>
        </div>
    </div>
        <div class="form-group">
            <label for="weight">Weight (lbs)</label>
            <div class='input-group'>
                <input type="text" id="stone" name="stone" class="form-control" placeholder="0" />
                <p>st</p>
            </div>
            <div class='input-group'>
                <input type="text" id="pounds" name="pounds" class="form-control" placeholder="0" />
                <p>lbs</p>
            </div>
        </div>
        <button type="submit" id="submit" class="btn btn-primary">Calculate</button>
    `
}
