import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import docs from './demo-button.md';
import * as Styled from './styled.jsx';

export default class DemoContainer extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		theme: PropTypes.object,
	};

	renderButtonsRow = renderButton => {
		const buttonMargins = ['small', 'medium', 'large', 'extraLarge'];
		return (
			<Styled.DemoRow>
				{buttonMargins.map((buttonMargin, i) => (
					<Styled.ButtonWrapper key={i}>{renderButton(buttonMargin)}</Styled.ButtonWrapper>
				))}
			</Styled.DemoRow>
		);
	};

	render() {
		return (
			<Styled.Demos>
				{this.renderButtonsRow(marginVariation => (
					<Button
						primary
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				{this.renderButtonsRow(marginVariation => (
					<Button
						primary
						disabled
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				{this.renderButtonsRow(marginVariation => (
					<Button
						primaryOutline
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				{this.renderButtonsRow(marginVariation => (
					<Button
						primaryOutline
						disabled
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				{this.renderButtonsRow(marginVariation => (
					<Button
						minor
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				{this.renderButtonsRow(marginVariation => (
					<Button
						minor
						disabled
						onClick={this.props.onClick}
						theme={this.props.theme}
						{...{ [marginVariation]: true }}
					>
						Invite Friends
					</Button>
				))}
				<Styled.Documentation dangerouslySetInnerHTML={{ __html: docs }} />
			</Styled.Demos>
		);
	}
}