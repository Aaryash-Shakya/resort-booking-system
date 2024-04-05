const CreditCardForm = () => {
    return (
        <form action="#">
            <div className="container-fluid grid">
                <div className="row pull-center">
                    <div className="col-md-4">
                        <div className="well">
                            <div className="row card"></div>
                            <br />
                            <div className="row-fluid">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Credit Card Number</label>
                                        <input type="text" name="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Expiration</label>
                                        <input type="text" placeholder="MM/YY" name="expiry" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row-fluid">
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="text" name="cvv" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <button type="button" className="btn btn-success">Submit</button>
                                    <button type="button" className="btn btn-info">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreditCardForm;
