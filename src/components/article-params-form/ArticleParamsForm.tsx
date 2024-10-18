// здесь работать
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

import { useState, FormEvent, MutableRefObject } from 'react';
import clsx from 'clsx';
import { useClickAway } from '@uidotdev/usehooks';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';

export type TAppState = {
	setAppState: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ setAppState }: TAppState) => {
	const [openForm, setOpenForm] = useState<boolean>(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const ref: MutableRefObject<HTMLElement> | null = useClickAway(() => {
		setOpenForm(false);
	});

	// Изменяем конкретное поле
	const changeParams = (optionName: string) => (option: OptionType) => {
		setFormState((prevState) => ({ ...prevState, [optionName]: option }));
	};

	//Функция для открытия/закрытия формы
	const openFromOnClick = () => {
		setOpenForm((prevState) => !prevState);
	};

	//Отправка формы
	const formSubmit = (event: FormEvent) => {
		event.preventDefault();
		setAppState(formState);
		setOpenForm(false);
	};

	//Сброс формы
	const formReset = (event: FormEvent) => {
		event.preventDefault();
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={openForm} onClick={openFromOnClick} />
			<aside
				className={clsx(styles.container, openForm && styles.container_open)}
				ref={ref}>
				<form className={styles.form} onSubmit={formSubmit} onReset={formReset}>
					<Text as={'h2'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title={'Шрифт'}
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={changeParams('fontFamilyOption')}
					/>

					<RadioGroup
						title={'Размер шрифта'}
						name={'Размер шрифта'}
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={changeParams('fontSizeOption')}
					/>
					<Select
						title={'Цвет шрифта'}
						selected={formState.fontColor}
						options={fontColors}
						onChange={changeParams('fontColor')}
					/>
					<Separator />
					<Select
						title={'Цвет фона'}
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={changeParams('backgroundColor')}
					/>
					<Select
						title={'Ширина контента'}
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={changeParams('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
