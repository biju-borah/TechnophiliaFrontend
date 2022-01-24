import React from 'react';

function Book() {
    return (
        <div class="container pt-4">
            <form class="row g-3">
                <div class="col-md-4">
                    <div class="form-outline">
                        <input type="text" class="form-control active" id="validationDefault01" required="" />
                        <label for="validationDefault01" class="form-label" style={{ marginLeft: "0px" }}>First name</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: '9px' }}></div><div class="form-notch-middle" style={{ width: "68px" }}></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-md-4">
                    <div class="form-outline">
                        <input type="text" class="form-control active" id="validationDefault02" required="" />
                        <label for="validationDefault02" class="form-label" style={{ marginLeft: "0px" }}>Last name</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "68px" }}></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-md-4">
                    <div class="input-group form-outline">
                        <span class="input-group-text" id="inputGroupPrepend2">2013</span>
                        <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required="" />
                        <label for="validationDefaultUsername" class="form-label" style={{ marginLeft: "60px" }}>Scholar ID</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "69px" }}></div><div class="form-notch-middle" style={{ width: "66.4px" }}></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-md-6">
                    <div class="form-outline">
                        <input type="text" class="form-control" id="validationDefault03" required="" />
                        <label for="validationDefault03" class="form-label" style={{ marginLeft: "0px" }}>City</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "29.6px" }}></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-md-6">
                    <div class="form-outline">
                        <input type="text" class="form-control" id="validationDefault05" required="" />
                        <label for="validationDefault05" class="form-label" style={{ marginLeft: "0px" }}>Zip</label>
                        <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "26.4px" }}></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required="" />
                        <label class="form-check-label" for="invalidCheck2">Agree to terms and conditions</label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}

export default Book;
