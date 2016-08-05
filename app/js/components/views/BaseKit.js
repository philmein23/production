import React from 'react';

const BaseKit = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Emergency Kit</h2>
        <label>LOCATION OF KIT</label>
        <input type="text"></input>
        <h3>Component Checklist</h3>
        <p>Check off the items you already have</p>
        <div>
            <input type="checkbox" name="water"></input>
            <label htmlFor="water">Water</label>
        </div>
        <div>
            <input type="checkbox" name="food"></input>
            <label htmlFor="food">Food</label>
        </div>
        <div>
            <input type="checkbox" name="noaaWeatherRadio"></input>
            <label htmlFor="noaaWeatherRadio">Battery Powered or Crank Radio</label>
        </div>
        <div>
            <input type="checkbox" name="flashlight"></input>
            <label htmlFor="flashlight">Flashlight</label>
        </div>
        <div>
            <input type="checkbox" name="extraBatteries"></input>
            <label htmlFor="extraBatteries">Extra Batteries</label>
        </div>
        <div>
            <input type="checkbox" name="firstAidKit"></input>
            <label htmlFor="firstAidKit">First Aid Kit</label>
        </div>
        <div>
            <input type="checkbox" name="whistle"></input>
            <label htmlFor="whistle">Whistle</label>
        </div>
        <div>
            <input type="checkbox" name="dustMask"></input>
            <label htmlFor="dustMask">Dust Mask</label>
        </div>
        <div>
            <input type="checkbox" name="sheetingAndDuctTape"></input>
            <label htmlFor="sheetingAndDuctTape">Plastic Sheeting and Duct Tape</label>
        </div>
        <div>
            <input type="checkbox" name="moistTowelettes"></input>
            <label htmlFor="moistTowelettes">Moist Towelettes</label>
        </div>
        <div>
            <input type="checkbox" name="garbageBagsAndPlasticTies"></input>
            <label htmlFor="garbageBagsAndPlasticTies">Garbage Bag and Plastic Ties</label>
        </div>
        <div>
            <input type="checkbox" name="wrenchOrPliers"></input>
            <label htmlFor="wrenchOrPliers">Wrench Or Pliers</label>
        </div>
        <div>
            <input type="checkbox" name="canOpener"></input>
            <label htmlFor="canOpener">Can Opener</label>
        </div>
        <div>
            <input type="checkbox" name="localMaps"></input>
            <label htmlFor="localMaps">Local Maps</label>
        </div>
      </section>
    );
  }
});

export default BaseKit;
